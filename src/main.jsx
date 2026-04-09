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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
