import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const pages = [
  {id: 1, name: 'main-content__page main-content__page_first-page'}, 
  {id: 2, name: 'main-content__page main-content__page_second-page'}, 
  {id: 3, name: 'main-content__page main-content__page_third-page'}
];

root.render(
  <App pages={pages}/>
);
