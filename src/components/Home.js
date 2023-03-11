import React from 'react'
import './Home.css'
import backgroundHome from '../images/figuretext.png';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
  return (
   
    <div class="container-fluid">

    <div class="row">

      <div class="col-sm-6">
        <div className='left'>
        <h1>Welcome to this react website, we really appriciate your time </h1>
        <h3>Let's build great stuff together.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className='home-button'>
        <button type="button" class="btn btn-primary me-2">Watch Demo</button>
        <button type="button" class="btn btn-secondary">Join Us</button>
        </div>
      </div>

      <div class="col-sm-6">
         
        <div className="right">
        <img src={backgroundHome} alt="bg"></img>
        </div>
        
      </div>

    </div>
  </div>
   
    // <div class="container-box">
    
    // <div className='home-content'>
    // <h1>This is h1</h1>
    // <h2>This is h2</h2>
    // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    // </div>

    // <div className="home-img"> 
    // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    // </div>



    // </div>

    
   
  )
}

export default Home;