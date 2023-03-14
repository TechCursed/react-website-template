import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


//this component is for rendering every other component on the homepage

function AllComponents() {
  return (
    <div className='AllComponents'>
     <Home />
     <About />
     <Contact />

    </div>
  )
}

export default AllComponents