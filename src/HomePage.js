import React from 'react'
import ProfileImage from './assets/giphy.gif'
import { Link } from 'react-router-dom';


export default function HomePage() {

  return (
    <div className="home">
      <div className="options">
        <Link to='/' className="link"> HOME </Link>
        <Link to='/about' className="link"> ABOUT </Link>
        <h1>BORBORICK ZHU</h1>
        <Link to='/projects' className="link"> PROJECTS </Link>
        <Link to='/misc' className="link"> MISC </Link>
      </div>
      <div className='profile-image'>
        <img className='ztmy-image' src={ProfileImage} alt="" />
      </div>
      <div className="blurb">
        <h3> Borborick Zhu </h3>
        <h3> 19 - CS @ UCLA</h3>
        <p>
          Welcome to my website! I tried to take a more expressionist yet minimialist 
          design approach to the website to show my love for simplistic beauty. Be sure to
          look through the other 3D animations by @tysonparks.
        </p>
        <div className="socials">
          <div>
            <button className="socials-button">
              Instagram
            </button>
          </div>
          <div>
            <button className="socials-button">
              LinkedIn
            </button>
          </div>
          <button className="socials-button">
            GitHub
          </button>
          <button className="socials-button">
            Resume
          </button>
        </div>
      </div>
      
     
    </div>

    
  )
}
