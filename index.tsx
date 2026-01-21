
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("Starting Save Rojava Application...");

const mountApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("FATAL: Target container 'root' not found in the DOM.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Application mounted successfully.");
  } catch (error) {
    console.error("CRITICAL: Failed to mount the React application:", error);
    // Attempt to show error on screen if blank
    container.innerHTML = `<div style="color: red; padding: 20px; text-align: center; background: #000; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h1 style="margin-bottom: 20px;">Platform Error</h1>
      <p>${error.message}</p>
      <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #FEBD11; border: none; border-radius: 5px; cursor: pointer; color: #000; font-weight: bold;">Reload Page</button>
    </div>`;
  }
};

// Ensure script runs regardless of how it's loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
