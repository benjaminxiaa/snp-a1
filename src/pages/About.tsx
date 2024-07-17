import React from 'react';
import logo from '../logo.svg';
import people from '../people.png'
import '../css/about.css';
import NavbarTwo from '../components/Navbar2';

function Home() {
  return (
    <>
      <NavbarTwo />
      <div className="about-container">
        <div className="about-side about-left-side">
          <div className="about-about-title">Who Are We?</div>
          <p className="about-about-text">NeuroFlow is created by a group of high schoolers advocating for neurodiversity. This project was created as part of the 2024 Stanford Neurodiversity Project - Research, Education, and Advocacy Camp for High Schoolers (2024 SNP-REACH). </p>
          <br />
          <div className="about-contact-title">Contact Us</div>
          <p className="about-contact-text">Email Address:<br />neuroflow.contact@gmail.com</p>
        </div>
        <div className="about-side about-right-side">
          {/* <div className="about-title">Right Title</div> */}
        </div>
      </div>
      {/* <div className="about-mission-container">
        <div className="about-mission-side about-mission-left-side">
        </div>
        <div className="about-mission-side about-mission-right-side">
          <div className="about-mission-title">Our Mission?</div>
          <p className="about-mission-text">NeuroFlow aims to create an interactive, educational and online social platform for neurodivergent high schoolers to manage stress, enhance focus, and learn to balance academic and social life. <br />Our main goals are to help neurodiverse students' transition from middle school to high school and to help them control their sensory issues and social-emotional problems.</p>
        </div>
      </div> */}
    </>
  );
}

export default Home;
