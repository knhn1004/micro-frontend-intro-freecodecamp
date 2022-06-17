import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// react-router-dom v6

import Footer from 'home/Footer';
import Header from 'home/Header';

import 'remixicon/fonts/remixicon.css';
import './index.scss';
import PDPContent from 'pdp/PDPContent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';

const MainLayout = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default MainLayout;
