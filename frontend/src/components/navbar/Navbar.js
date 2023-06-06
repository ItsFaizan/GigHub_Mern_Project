import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
    return (
        
        <div className={active ? "navbar active" : "navbar"}>
          <div className='navbar-container'>
                <div className='nav_logo'>
                    <span className='text'>GigHub</span>
                    <span className='dot'>.</span>
                </div>
                <div className='nav_links'>
                    <span>GigHub Buisness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign up</span>
                    <span>Join</span>
                    <span>Become a seller</span>
                </div>
           </div>
           
           {(active) && (
        <>
          <hr />
          <div className="nav_menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
        </div>
       
  
    )
    
}

export default Navbar;