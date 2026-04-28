{/*== React & Package Imports  == */}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
{/*== Script Imports  == */}
import ScrollToTop from './utils/scripts/ScrollToTop.jsx';
{/*== Layout Component Imports  == */}
import Header from './components/layout/Header/index.jsx'
import Footer from './components/layout/Footer/index.jsx';
{/*== Page Imports  == */}
import Home from './pages/Home/index.jsx'
import Training from './pages/Training/index.jsx';
import Department from './pages/Department/index.jsx';
import Programs from './pages/Programs/index.jsx';
import Error from './pages/Error/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        {/* Completed Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/training/:id" element={<Training />} />
        <Route path="/department/:dept" element={<Department />} />
        <Route path="/programs" element={<Programs />} />

        {/* Routes under construction */}
        <Route path="/school" element={<Error />} />
        <Route path="/our-vision" element={<Error />} />
        <Route path="/our-network" element={<Error />} />
        <Route path="/certification-process" element={<Error />} />
        <Route path="/workshops" element={<Error />} />
        <Route path="/blog" element={<Error />} />
        <Route path="/events" element={<Error />} />
        <Route path="/jobs" element={<Error />} />
        <Route path="/about" element={<Error />} />
        <Route path="/student-portfolio" element={<Error />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
