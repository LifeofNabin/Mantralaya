// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/navbar';
import Footer from './components/footer';

// Main Pages
import FullPage from './pages/fullpage/fullpage';
import Services from './pages/services/services';
import OurTeam from './pages/ourteam/ourteam';
import Contact from './pages/contact/contact';
import Schedule from './pages/schedule/call';

// Sub-Service Detail Pages
import Codeservice from './pages/servicedetail/code/codeservice';
import Capitalservice from './pages/servicedetail/capital/capitalservice';
import Creationservice from './pages/servicedetail/creation/creationservice';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<FullPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule-call" element={<Schedule />} />

          {/* Service Details */}
          <Route path="/services/code" element={<Codeservice />} />
          <Route path="/services/capital" element={<Capitalservice />} />
          <Route path="/services/creation" element={<Creationservice />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
