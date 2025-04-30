
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the root element once
const container = document.getElementById("root");

// Ensure container exists
if (!container) {
  throw new Error("Root element not found!");
}

// Create root once
const root = createRoot(container);

// Use a more performant approach with concurrent features
// Preload critical resources
const preloadAssets = () => {
  // Preload logo
  const logoPreload = document.createElement('link');
  logoPreload.rel = 'preload';
  logoPreload.href = '/lovable-uploads/af53a0ef-4355-40ef-ab74-781f6fa9f1e3.png';
  logoPreload.as = 'image';
  document.head.appendChild(logoPreload);
  
  // Preload WhatsApp icon
  const whatsappPreload = document.createElement('link');
  whatsappPreload.rel = 'preload';
  whatsappPreload.href = '/lovable-uploads/whatsapp-icon.svg';
  whatsappPreload.as = 'image';
  document.head.appendChild(whatsappPreload);
};

// Defer non-critical initialization
const initApp = () => {
  preloadAssets();
  root.render(<App />);
};

// Use requestIdleCallback for non-critical initialization
requestIdleCallback(initApp);

// Fallback for browsers that don't support requestIdleCallback
function requestIdleCallback(callback: () => void) {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
}
