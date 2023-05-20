import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);
