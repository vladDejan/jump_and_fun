import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  // React 18 hydrate
  ReactDOM.hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </StrictMode>
  )
} else {
  // Normalan render
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </StrictMode>
  )
}