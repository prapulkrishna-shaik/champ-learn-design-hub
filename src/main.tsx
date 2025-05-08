
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
    '/assets/indian-classroom-students.jpg',
    '/assets/indian-student-chalkboard.jpg',
    '/assets/classroom-learning.jpg',
    '/assets/students-interactive-session.jpg',
    '/assets/students-group-study.jpg',
    '/assets/student-chalkboard.jpg',
    '/assets/placeholder.svg',
    '/assets/whatsapp-icon.svg'
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
  const preconnectUrls = ['https://docs.google.com', 'https://www.youtube.com'];
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
