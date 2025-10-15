import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
