{/*== React & Package Imports  == */}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
{/*== Script Imports  == */}
import ScrollToTop from './utils/scripts/ScrollToTop.jsx';
{/*== Component Imports  == */}
import { AfriChatBootstrap } from './components/ui/AfriChatBootstrap/index.jsx';
{/*== Layout Component Imports  == */}
import Header from './components/layout/Header/index.jsx'
import Footer from './components/layout/Footer/index.jsx';
{/*== Page Imports  == */}
import Home from './pages/Home/index.jsx';
import School from './pages/School/index.jsx';
import Vision from './pages/Vision/index.jsx'
import CertificationProcess from './pages/CertificationProcess/index.jsx';
import Training from './pages/Training/index.jsx';
import Department from './pages/Department/index.jsx';
import Programs from './pages/Programs/index.jsx';
import Error from './pages/Error/index.jsx';
import UnderConstruction from './pages/UnderConstruction/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <AfriChatBootstrap />
      <Header />
      <Routes>
        {/* Completed Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/our-vision" element={<Vision />} />
        <Route path="/certification-process" element={<CertificationProcess />} />
        <Route path="/training/:id" element={<Training />} />
        <Route path="/department/:dept" element={<Department />} />
        <Route path="/programs" element={<Programs />} />

        {/* Routes under construction */}
        <Route path="/our-network" element={<UnderConstruction />} />
        <Route path="/workshops" element={<UnderConstruction />} />
        <Route path="/blog" element={<UnderConstruction />} />
        <Route path="/events" element={<UnderConstruction />} />
        <Route path="/jobs" element={<UnderConstruction />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/student-portfolio" element={<UnderConstruction />} />
        <Route path="/student-registration" element={<UnderConstruction />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
