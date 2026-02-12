import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/index.jsx'
import Home from './pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
