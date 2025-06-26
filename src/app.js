import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home/home';
import Services from './pages/services/services';
import OurTeam from './pages/ourteam/ourteam';
import Contact from './pages/contact/contact';

// Use lowercase folder & filenames
import Codeservice from './pages/servicedetail/code/codeservice';
import Capitalservice from './pages/servicedetail/capital/capitalservice';
import Creationservice from './pages/servicedetail/creation/creationservice';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/code" element={<Codeservice />} />
        <Route path="/services/capital" element={<Capitalservice />} />
        <Route path="/services/creation" element={<Creationservice />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
