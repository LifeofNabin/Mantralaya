// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import FullPage from './pages/fullpage/fullpage';
import Services from './pages/services/services';
import OurTeam from './pages/ourteam/ourteam';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page that scrolls through sections */}
        <Route path="/" element={<FullPage />} />
        {/* Standalone routes in case user visits directly */}
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
