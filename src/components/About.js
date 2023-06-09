import React from 'react'
import './About.css'
import backgroundAbout from '../images/coderdojo.png';

function About() {

  return (

  <div className='about' id='about'>
  <div class="container-fluid">

   <div class="row">

    <div class="col-sm-6">
     
     <div className="right">
     <img src={backgroundAbout} alt="bg" className='animated'></img>
     </div>
     
    </div>

    <div class="col-sm-6">
    <div className='left'>
    <h1>React is beautiful</h1>
    <p>I've always developed stuff in vanilla javascript, and the moment I got familiar with react, it was  absolutely a game changer for me, it's a vast library and I'm getting there slowly, one step at a time.</p>
    <h2>This website use the following tools</h2>

    <div className='details'>
    <h4>React-Router-DOM</h4>
    <h4>React-Bootstrap</h4>
    <h4>Netlify</h4>
    </div>

    </div>

    <div className='about-button'>
        <button type="button" class="btn btn-primary me-2">Know More</button>
        <button type="button" class="btn btn-secondary">Explore Tools</button>
        </div>

  </div>

</div>
</div>

  </div>
 
  )
}

export default About