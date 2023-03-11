import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';






function App() {
  return (
    <div className="App">
      
    <Router>
      <AppNavbar />
      <Home /> 
      <About />
    
      {/* <About /> */}
      <Routes>
        <Route path = "/home" element = { < Home /> } />
        <Route path = "/about" element = { < About /> } />
        <Route path = "/contact" element = { < Contact /> } />
     </Routes>      
  </Router>


</div>


  );
}

export default App;
