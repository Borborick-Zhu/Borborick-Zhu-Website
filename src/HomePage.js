import React from 'react'
import ProfileImage from './assets/zutomayo.png'


export default function HomePage() {
  return (
    <div className="home">
      <div className='profile-image'>
        <img className="ztmy-image" src={ProfileImage} alt=""/>
        <h1>BORBORICK ZHU</h1>
      </div>
      <div className="options">
        <h2>HOME</h2>
        <h2>ABOUT</h2>
        <h2>PROJECTS</h2>
        <h2>MISC</h2>
      </div>
     
    </div>

    
  )
}
