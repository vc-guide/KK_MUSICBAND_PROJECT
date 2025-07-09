import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router } from 'react-router-dom'

import Bookevent from './components/Bookevent.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
    <App/>
    </StrictMode>
  </Router>
)
