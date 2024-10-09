import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Here im running React.StrictMode to make sure code stays clean react checks it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



