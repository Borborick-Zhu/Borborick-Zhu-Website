import React from 'react'
import { Link } from 'react-router-dom';

export default function MiscPage() {
  return (
    <div className="home">
      <div className="options">
        <Link to='/' className="link"> HOME </Link>
        <Link to='/about' className="link"> ABOUT </Link>
        <h1>BORBORICK ZHU</h1>
        <Link to='/projects' className="link"> PROJECTS </Link>
        <Link to='/misc' className="link"> MISC </Link>
      </div>
    </div>
  )
}
