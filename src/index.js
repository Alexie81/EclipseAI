import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './css/404.css'
import App from './App.js';
import Home from './Home.js';
import Nav from './Nav.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

function PageNotFound() {
  return (
    <div class="container-404">
    <div class="row-404">
        <div class="xs-12-404 md-6-404 mx-auto-404">
            <div id="countUp">
                <div class="number-404" data-count="404">404</div>
                <div class="text-404">Page not found</div>
                <div class="text-404">This may not mean anything.</div>
                <div class="text-404">We are curently working for your request.</div>
            </div>
        </div>
    </div>
</div> 
  );

  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
