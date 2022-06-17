import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// react-router-dom v6

import Footer from 'home/Footer';
import Header from 'home/Header';

import './index.scss';
import PDPContent from './PDPContent';

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('app'));
