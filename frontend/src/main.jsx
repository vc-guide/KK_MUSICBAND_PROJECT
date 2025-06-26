import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router } from 'react-router-dom'
import Menubar from './components/Menubar.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <Menubar/>
    </StrictMode>
  </Router>,
)
