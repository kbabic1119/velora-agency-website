
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const debug = document.getElementById('error-display');
if (debug) {
  debug.style.display = 'block';
  debug.style.background = 'rgba(0, 255, 0, 0.5)';
  debug.innerHTML += '<div>DEBUG: React starting...</div>';
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
