import React from 'react'
import ProfileImage from './assets/giphy.gif'
import MenuBar from './MenuNav.js'


export default function HomePage() {

  return (
    <div>
      <MenuBar />
      <div className="home">
      
        <div className='profile-image'>
          <img className='ztmy-image' src={ProfileImage} alt="" />
        </div>
        <div className="blurb">
          <h3> Borborick Zhu </h3>
          <h3> 20 - CS @ UCLA</h3>
          <p>
            Welcome to my website! I tried to take a more expressionist yet minimialist 
            design approach to the website to show my love for simplistic beauty. Be sure to
            look through the other 3D animations by @tysonparks.
          </p>
          <div className="socials">
            <div>
              <button className="socials-button">
                <a className="link" href="https://www.instagram.com/bkrnoick/" target="_blank" rel="noreferrer"> Instagram </a>
              </button>
            </div>
            <div>
              <button className="socials-button">
                <a className="link" href="https://www.linkedin.com/in/borborick-zhu-b089b0205/" target="_blank" rel="noreferrer"> LinkedIn </a>
              </button>
            </div>
              <button className="socials-button">
                <a className="link" href="https://github.com/Borborick-Zhu" target="_blank" rel="noreferrer"> GitHub </a>
              </button>
            <button className="socials-button">
              <a className="link" href="https://drive.google.com/file/d/1knG-PAWWhwux3eBKVGK8Q807UYiviFUW/view?usp=sharing" target="_blank" rel="noreferrer"> Resume </a>
            </button>
          </div>
        </div>
        
      
      </div>
    </div>
    

    
  )
}
