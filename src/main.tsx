
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
  // Define Indian teaching and school related images for preloading
  const criticalImages = [
    '/lovable-uploads/7d814bf1-891d-44ac-b85a-8a028e7ceb74.png',
    'https://images.unsplash.com/photo-1613066835265-3f26e1bda229',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754',
    'https://images.unsplash.com/photo-1613066823029-4fba02c3bcb6',
    'https://images.unsplash.com/photo-1613066823664-1d4601ecadc3',
    '/lovable-uploads/whatsapp-icon.svg'
  ];
  
  // Preload all critical images
  criticalImages.forEach(src => {
    const imgPreload = document.createElement('link');
    imgPreload.rel = 'preload';
    imgPreload.href = src;
    imgPreload.as = 'image';
    document.head.appendChild(imgPreload);
  });
  
  // Add preconnect for external resources
  const preconnectUrls = ['https://images.unsplash.com'];
  preconnectUrls.forEach(url => {
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = url;
    document.head.appendChild(preconnect);
  });
};

// Initialize app with better performance
const initApp = () => {
  // Preload assets before rendering
  preloadAssets();
  
  // Add performance marks for monitoring
  performance.mark('app-init-start');
  
  // Render the app
  root.render(<App />);
  
  performance.mark('app-init-end');
  performance.measure('app-initialization', 'app-init-start', 'app-init-end');
};

// Execute immediately without deferring
initApp();
