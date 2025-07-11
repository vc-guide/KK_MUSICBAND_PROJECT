import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from "react-router-dom"
import Menubar from './components/Menubar.jsx'
import Home from './components/Home';
import Upcoming_Events from './components/Upcoming_Events.jsx'
import Bookevent from './components/Bookevent.jsx'
import Medley1 from './components/Medley1.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Events" element={<Upcoming_Events/>}/>
      <Route path="/bookevent" element={<Bookevent/>} />
      <Route path="/Medley1" element={<Medley1/>}/>
    </Routes>
  )
}

export default App
