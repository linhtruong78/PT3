import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import './index.css';

// Vite injects the configured `base` as import.meta.env.BASE_URL.
// We strip the trailing slash so React Router accepts it as a basename.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
