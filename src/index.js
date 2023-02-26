import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/Inter-Regular.woff"
import "./fonts/Inter-Regular.woff2"
import "./fonts/Inter-Bold.woff"
import "./fonts/Inter-Bold.woff2"
import "./fonts/Inter-Thin.woff"
import { Helmet } from "react-helmet";
import Favicon from 'react-favicon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Markus Johansen's portfolio</title>
    </Helmet>
    <Favicon url='https://img.icons8.com/nolan/256/portfolio.png' />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
