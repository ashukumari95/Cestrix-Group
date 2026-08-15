import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

// SEO UPGRADE: Agar pre-rendered HTML majood hai (react-snap se), toh hydrateRoot use karein.
// Agar nahi hai, toh normal createRoot use karein. (Isse koi existing code break nahi hoga).
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}