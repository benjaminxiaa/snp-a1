import React from 'react';
import logo from '../logo.svg';
import '../css/navbar.css';
/**
 * TODO: Change Login and Register to Buttons
 */
function Navbar() {
  return (
    <>
      <div className='navbar1-container'>
        <div className="navbar1-logo">
          <div className="navbar1-logo-image">
            <img src={logo} alt='logo' />
          </div>
          <div className="navbar1-logo-text">
            <p className="navbar1-rightLogo"><a href="/" style={{ textDecoration: "none" }}>NeuroFlow</a></p>
          </div>
        </div>
        <div className="navbar1-links">
          {/* <a href="/">Home</a> */}
          <a href="/interactive">Interactive</a>
          <a href="/informative">Informative</a>
          <a href="/about">About</a>
          {/* <a href="/contact">Contact</a> */}
        </div>
        {/* <div className="navbar1-login">
          
        </div> */}
        <div className="navbar1-auth">
          <button className="navbar1-button"><a href="/login">Login</a></button>
          <button className="navbar1-button"><a href="/register">Register</a></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
