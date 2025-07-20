import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import FullPage from './pages/fullpage/fullpage';
import Services from './pages/services/services';
import OurTeam from './pages/ourteam/ourteam';
import Contact from './pages/contact/contact';

import Codeservice from './pages/servicedetail/code/codeservice';
import Capitalservice from './pages/servicedetail/capital/capitalservice';
import Creationservice from './pages/servicedetail/creation/creationservice';
import Schedule from './pages/schedule/call';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<FullPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />

          {/* Sub-service detail pages */}
          <Route path="/services/code" element={<Codeservice />} />
          <Route path="/services/capital" element={<Capitalservice />} />
          <Route path="/services/creation" element={<Creationservice />} />

          <Route path="/schedule-call" element={<Schedule />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;