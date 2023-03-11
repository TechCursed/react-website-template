import React from 'react'
import './About.css'
import backgroundAbout from '../images/coderdojo.png';

function About() {

  return (

  //     <div className="containerAbout">
  //     <div className="row">
  //     <div className="col-sm colmn-2">
  //     <img src = {backgroundAbout} alt="bg" />
  //     </div>
  //     <div className="col-sm colmn-1">
  
  //     </div>
  //   </div>
  // </div>
  <div className='about'>
 <div class="container-fluid">

<div class="row">

<div class="col-sm-6">
     
     <div className="right">
     <img src={backgroundAbout} alt="bg" className='animated'></img>
     </div>
     
   </div>

  <div class="col-sm-6">
    <div className='left'>
    <h1>This is a About section</h1>
    <p>Experts want the geeks to understand that the bitcoin is easy to use and very soon they will become user friendly. Many have failed to understand that cryptocurrencies needed to be used on a regular basis, as a daily commodity to buy stuff in daily life. Some feel that right now it is not important to make bitcoin quite compulsive in the economy for daily purposes.</p>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
    </div>

  </div>

</div>
</div>

  </div>
 
  )
}

export default About