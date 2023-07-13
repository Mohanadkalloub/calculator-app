import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css";
import { AppContextProvider } from './context/app_context';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

