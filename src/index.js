import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

//On défini dans le HTML où va vivre notre app React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
