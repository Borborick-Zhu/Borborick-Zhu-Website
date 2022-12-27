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
              <a className="link" href="https://www.instagram.com/bkrnoick/" target="_blank"> Instagram </a>
            </button>
          </div>
          <div>
            <button className="socials-button">
              <a className="link" href="https://www.linkedin.com/in/borborick-zhu-b089b0205/" target="_blank"> LinkedIn </a>
            </button>
          </div>
            <button className="socials-button">
              <a className="link" href="https://github.com/Borborick-Zhu" target="_blank"> GitHub </a>
            </button>
          <button className="socials-button">
            <a className="link" href="https://drive.google.com/file/d/11vU1-AB1kHbEPP0DmU3CSJ9xZTyLIXob/view?usp=sharing" target="_blank"> Resume </a>
          </button>
        </div>
      </div>
      
     
    </div>

    
  )
}
