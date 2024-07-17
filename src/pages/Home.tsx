import React from 'react';
import logo from '../logo.svg';
import people from '../people.png'
import '../css/home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <Navbar />
      <div className='image-container'>
        <img src={people} alt='people' />
      </div>
      <h1 className='title'>Welcome to</h1>
      <h1 className='subtitle'>NeuroFlow</h1>
      <h2 className='caption'>Embrace who we are and learn to be more.</h2>

      <div className="info-container">
        <div className="info-section">
          <div className="info-title">Resources</div>
          <div className="info-caption"><a href="/resources">Look for more</a></div>
          <div className="info-vertical-bar"></div>
        </div>
        <div className="info-section">
          <div className="info-title">Daily Check In</div>
          <div className="info-caption"><a href="/daily">Look for more</a></div>
          <div className="info-vertical-bar"></div>
        </div>
        <div className="info-section">
          <div className="info-title">Your Calendar</div>
          <div className="info-caption"><a href="/calendar">Look for more</a></div>
          <div className="info-vertical-bar"></div>
        </div>
        <div className="info-section">
          <button className="info-search-button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
