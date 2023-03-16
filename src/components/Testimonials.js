import React from 'react'
import './Testimonials.css'
import bs from '../images/Bootstrap-300x248.png'
import js from '../images/jslw.png'
import rjs from '../images/React-icon.png'
function Testimonials() {
  return (

    <div className='Testimonials'>


        <div className='card-layout'>

        <div class="card-deck">

  <div class="card">
    <img src={js} class="card-img-top" alt="js logo" />
    <div class="card-body">
      <h5 class="card-title">Javascript</h5>
      <p class="card-text">JavaScript is a programming language that is one of the core technologies of the World Wide Web,  As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
      <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src={rjs} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">React</h5>
      <p class="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
      <p class="card-text"><small class="text-muted">Last updated 8 mins ago</small></p>
    </div>
  </div>


  <div class="card">
    <img src={bs} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Bootstrap</h5>
      <p class="card-text">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development, offering design templates for typography, forms, buttons, navigation, and other interface components.</p>
      <p class="card-text"><small class="text-muted">Last updated 5 weeks ago</small></p>
    </div>
  </div>
  
</div>

        </div>
    </div>
  )
}

export default Testimonials