import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

// ES module nema __dirname, pa moramo da ga napravimo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/programs/bubble-house',
  '/programs/veliki-dvorac',
  '/programs/mali-dvorac',
  '/paketi',
  '/gallery',
  '/rezervacije'
];

const distPath = path.join(__dirname, '../dist');

async function prerender() {
  console.log('🚀 Starting Vite preview server...');
  
  // Pokreni Vite preview server
  const serverProcess = spawn('npm', ['run', 'preview'], {
    shell: true,
    stdio: 'inherit'
  });

  // Sačekaj da se server pokrene (5 sekundi)
  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log('🚀 Starting prerender...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:4173${route}`;
      
      console.log(`📄 Prerendering: ${route}`);
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Sačekaj malo da se React hydrate-uje
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const html = await page.content();
      
      const routePath = route === '/' ? '' : route;
      const filePath = path.join(distPath, routePath, 'index.html');
      
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`✅ Saved: ${filePath}`);
      
      await page.close();
    } catch (error) {
      console.error(`❌ Error prerendering ${route}:`, error.message);
    }
  }

  await browser.close();
  
  // Ugasi server
  console.log('🛑 Stopping preview server...');
  serverProcess.kill();
  
  console.log('🎉 Prerendering complete!');
  process.exit(0);
}

prerender().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});