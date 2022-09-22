import React from 'react';
import {Link} from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";



const Navbar = () => {
   
    return( 
        <nav class="navbar navbar-expand-lg navbar-light bg-primary"> 
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
           
            <li class="nav-item">
              <Link class="nav-link" to="/About">About</Link>
            </li>       
            <li class="nav-item">
            <Link class="nav-link" to="/Skill">Skill</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/Exp">Experience</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/Contact">Recommendation</Link>
            </li>
                       
          </ul>
    
        </div>
        </nav>
    )
}

export default Navbar;