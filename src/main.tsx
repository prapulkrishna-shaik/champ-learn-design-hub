
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use a more performant approach with concurrent features
const container = document.getElementById("root");
const root = createRoot(container!);

// Defer non-critical initialization
requestIdleCallback(() => {
  root.render(<App />);
});

// Fallback for browsers that don't support requestIdleCallback
function requestIdleCallback(callback: () => void) {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
}
