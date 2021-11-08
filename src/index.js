import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Work from './containers/work'
import reportWebVitals from './reportWebVitals';
import Header from './containers/header';
import Footer from './containers/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
