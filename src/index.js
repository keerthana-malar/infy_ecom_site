import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
// import Slider from './Slider';
import Header from './common/header';
// import Footer from './common/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Header/>
   {/* <Slider/> */}
   <Home/>
   {/* <Footer/> */}
   </BrowserRouter>
);

reportWebVitals();
