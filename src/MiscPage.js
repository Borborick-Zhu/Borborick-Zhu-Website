import React from 'react'
import { Link } from 'react-router-dom';
import ztmy from './assets/ztmy.jpg';
import cench from './assets/cench.jpg';
import dave from './assets/dave.jpg';


export default function MiscPage() {
  return (
    <div>
      <div className="home">
        <div className="options">
          <Link to='/' className="link"> HOME </Link>
          <Link to='/about' className="link"> ABOUT </Link>
          <h1>BORBORICK ZHU</h1>
          <Link to='/projects' className="link"> PROJECTS </Link>
          <Link to='/misc' className="link"> MISC </Link>
        </div>

        <div>
          <p className="misc-blurb">Just a place for you to learn more about me and for me to experiment! Try hovering over
            each element.The images below are my current favourite artists. 
          </p>
          <br/>
        </div>
      </div>
      <div className="misc-grid">
        <div className='misc-grid-element'> 
          <img className="misc-image" src={ztmy} alt=""/>
        </div>
        <div className='misc-grid-element2'>
          hi
        </div>
        <div className='misc-grid-element2'>
          hi
        </div>
        <div className='misc-grid-element'> 
          <img className="misc-image" src={dave} alt=""/>
        </div>
        
      </div>
      

    </div>
  )
}
