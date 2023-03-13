import React from 'react'
import './Contact.css'

import { FaTwitterSquare , FaFacebook, FaInstagram, FaYoutube, FaLinkedin,FaWhatsapp, FaGoogle } from 'react-icons/fa';

function Contact() {
  return (
  
    <div className='final'>

    <h3>Hope you had fun visiting us,<br></br> you can find us here </h3>
    
    <div className='icon-links'>

    <h3>  <a href="#">< FaTwitterSquare /> </a> </h3>
    <h3>  <a href="#">< FaFacebook /> </a>  </h3>
    <h3>  <a href="#">< FaInstagram /> </a> </h3>
    <h3>  <a href="#">< FaYoutube /> </a> </h3>
    <h3>  <a href="#">< FaLinkedin /> </a> </h3>
    <h3>  <a href="#">< FaWhatsapp /> </a> </h3>
    <h3>  <a href="#">< FaGoogle /> </a> </h3>

    </div>




    <div className='foot'>    
    
    <div className="footList">

    <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Help Center</a></li>  
        <li><a href="#">Integrations</a></li>   
        <li><a href="#">Developers</a></li>                 
           
        
    </ul>
</div>   

<div className="footList">
<ul>
<li><a href="#">Events</a></li> 
<li><a href="#">Sitemap</a></li>       
<li><a href="#">Support</a></li>        
<li><a href="#">Partners</a></li>      
<li><a href="#">Blog</a></li>            
         
        
</ul>
</div>  

<div className="footList">
<ul>
        
        
        <li><a href="#">Career Opportunities</a></li>  
        <li><a href="#">Customer Stories</a></li>  
        <li><a href="#">Cookies Settings</a></li> 
        <li><a href="#">Plans & Pricing</a></li>                    
        <li><a href="#">Newsletter</a></li> 
</ul>
</div>   


</div>


    <div className='footer-para'>
        <p>Copyright © 2023 Brand name. All rights reserved. Privacy Policy | Terms of Use | Sales and Refunds | Legal  </p>
        {/* <p>Copyright © 2023 Brand name. All rights reserved.</p> */}
    </div>


    </div>


  )
}

export default Contact