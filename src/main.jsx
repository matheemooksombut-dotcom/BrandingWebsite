import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Headersection from './headersection.jsx'
import Navbar from './navbar.jsx'
import Branding from './branding.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Headersection />
    <Branding />
    
    
  </StrictMode>,
)
