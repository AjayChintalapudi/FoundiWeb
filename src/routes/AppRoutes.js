import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import About from 'pages/About/About';
import Products from 'pages/Products/Products';

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
