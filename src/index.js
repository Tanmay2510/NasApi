import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />

    </React.StrictMode>
    </BrowserRouter>

    );


