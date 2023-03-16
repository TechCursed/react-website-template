import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';



//this component is for rendering every other component on the homepage

function AllComponents() {
  return (
    <div className='AllComponents'>
     <Home />
     <About />
     <Testimonials />     
     <Contact />

    </div>
  )
}

export default AllComponents