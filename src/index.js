import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './app.css';

// window.addEventListener('load', () => {
//   const tabsBox = document.querySelector('.tabs__box');

//   const dragging = (e) => {
//     console.log(dragging);
//     tabsBox.scrollLeft -= e.movementX;
//   };

//   tabsBox.addEventListener('mousemove', dragging);
// });

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
