import React from 'react'
import ProfileImage from './assets/8bitpix.png'
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className="home">
      <div className='profile-image'>
        <img className="ztmy-image" src={ProfileImage} alt=""/>
        <h1>BORBORICK ZHU</h1>
      </div>
      <div className="options">
        <Link to='/' className="link"> HOME </Link>
        <Link to='/about' className="link"> ABOUT </Link>
        <Link to='/projects' className="link"> PROJECTS </Link>
        <Link to='/misc' className="link"> MISC </Link>
      </div>
     
    </div>

    
  )
}
