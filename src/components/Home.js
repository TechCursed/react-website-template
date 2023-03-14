import React from 'react'
import './Home.css'
import backgroundHome from '../images/figuretext.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
  return (

    <div className='home' id='home'>

<div class="container-fluid">

    <div class="row">

      <div class="col-sm-6">
        <div className='left'>
        <h1>Thanks for checking out this react website, <br></br> You're awesome.!  </h1>
        <h3>Let's build great stuff together. 🚀 </h3>
      </div>

        <div className='home-button'>
        <button type="button" class="btn btn-primary me-2">Watch Demo</button>
        <button type="button" class="btn btn-secondary">Join Us</button>
        </div>
      </div>

      <div class="col-sm-6">
         
        <div className="right">
        <img src={backgroundHome} alt="bg" className='animated'></img>
        </div>
        
      </div>

    </div>
  </div>
  
</div>
   
    
   
  )
}

export default Home;