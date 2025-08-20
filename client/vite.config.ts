import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), dts(), react(), tailwindcss(),],
  base: '/',
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
