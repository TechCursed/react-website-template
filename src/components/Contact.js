import React from 'react'
import './Contact.css'
import getapp from '../images/pngegg.png';


import { FaTwitterSquare , FaFacebook, FaInstagram, FaYoutube, FaLinkedin,FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  return (
  
    <div className='final'>

    {/* <h3>Hope you had fun visiting us,<br></br> you can find us here </h3> */}
    <h3>Our Social Links</h3>

        
    <div className='icon-links'>

    <h3>  <Link to="#">< FaTwitterSquare /> </Link> </h3>
    <h3>  <Link to="#">< FaFacebook /> </Link>  </h3>
    <h3>  <Link to="#">< FaInstagram /> </Link> </h3>
    <h3>  <Link to="#">< FaYoutube /> </Link> </h3>
    <h3>  <Link to="#">< FaLinkedin /> </Link> </h3>
    <h3>  <Link to="#">< FaWhatsapp /> </Link> </h3>
    <h3>  <Link to="#">< FaGoogle /> </Link> </h3>

    </div>




    <div className='foot'>    
    
    <div className="footList">

    <ul>
        <li><Link to="#">About Us</Link></li> 
        <li><Link to="#">Contact Us</Link></li> 
        <li><Link to="#">Developers</Link></li> 
        <li><Link to="#">Help Center</Link></li> 
        <li><Link to="#">Integrations</Link></li>                 
    </ul>
  </div>   

<div className="footList">
<ul>

        <li><Link to="#">Events</Link></li>  
        <li><Link to="#">Sitemap</Link></li> 
        <li><Link to="#">Support</Link></li> 
        <li><Link to="#">Partners</Link></li> 
        <li><Link to="#">Blog</Link></li> 
                
</ul>
</div>  

<div className="footList">
<ul>
        
        
        <li><Link to="#">Career Opportunities</Link></li>  
        <li><Link to="#">Customer Stories</Link></li> 
        <li><Link to="#">Cookies Settings</Link></li> 
        <li><Link to="#">Plans & Pricing</Link></li> 
        <li><Link to="#">Career Opportunities</Link></li> 
        {/* <li><Link to="#">Newsletter</Link></li>  */}
</ul>
</div>   

</div>

<img src={getapp} class="app-img" alt="app" />

    <div className='footer-para'>
        <p>Copyright © 2023 Brand name. All rights reserved. Privacy Policy | Terms of Use | Sales and Refunds | Legal  </p>
        {/* <p>Copyright © 2023 Brand name. All rights reserved.</p> */}
    </div>


    </div>


  )
}

export default Contact