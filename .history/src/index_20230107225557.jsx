import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import test from './test.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
   <test />
  </React.StrictMode>
);

