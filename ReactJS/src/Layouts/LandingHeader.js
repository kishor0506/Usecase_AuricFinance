import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingHeader() {
    return (
        <header id="header" className="fixed-top">
          <div className="container d-flex">
      
            <div className="logo mr-auto">
              <h1 className="text-light"><a href=""><span>Auric Finance</span></a></h1>
             
            </div>
      
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><a href="#about">About Us</a></li>
                
                <li className="">
                  {/* <a href="">About</a> */}
                  <ul>
                
                    
                    {/* <li className="drop-down"><a href="#">Deep Drop Down</a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li> */}
                  </ul>
                </li>
                <li><a href="#services">Services</a></li>
      
                <li><a href="#contact">Contact</a></li>
                <li>
                  <Link to="/Signup">Sign In</Link>
                  </li>
                  <li>
                  <Link to="/login">Sign Up</Link>
                  </li>
      
              </ul>
            </nav>
      
            <div className="header-social-links">
              
              <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div>
      
          </div>
        </header>  
    )
}
