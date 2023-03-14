import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import AllComponents from './components/AllComponents';


function App() {
  return (
    <div className="App">


    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path = "/" element = { < AllComponents /> } />
        <Route path = "/home" element = { < Home /> } />
        <Route path = "/about" element = { < About /> } />
        <Route path = "/contact" element = { < Contact /> } />
     </Routes>      
    </BrowserRouter>

</div>


  );
}

export default App;
