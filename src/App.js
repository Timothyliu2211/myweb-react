import "./App.css";

import React from 'react'
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import FreeDiving, {Aida, Molchanovs} from "./pages/FreeDiving";
import TOEFL, {Reading, Listening, Speaking, Writing} from "./pages/TOEFL";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FreeDiving" element={<FreeDiving />} />
        <Route path="/FreeDiving/Aida" element={<Aida />} />
        <Route path="/FreeDiving/Molchanovs" element={<Molchanovs />} />
        <Route path="/TOEFL" element={<TOEFL />} />
        <Route path="/TOEFL/Reading" element={<Reading />} />
        <Route path="/TOEFL/Listening" element={<Listening />} />
        <Route path="/TOEFL/Speaking" element={<Speaking />} />
        <Route path="/TOEFL/Writing" element={<Writing />} />
        
      </Routes>
    </Router>
  )
}

export default App;
