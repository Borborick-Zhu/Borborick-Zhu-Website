import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  return (
    
    <div className="home">
      <div className="options">
        <Link to='/' className="link"> HOME </Link>
        <Link to='/about' className="link"> ABOUT </Link>
        <h1>BORBORICK ZHU</h1>
        <Link to='/projects' className="link"> PROJECTS </Link>
        <Link to='/misc' className="link"> MISC </Link>
      </div>

      <h1 className="project-title"> PROJECTS </h1>
      <div className="project-grid">
        <div className="project-element"> .001
          <p>
            to-do-list app
          </p>
        </div>
        <div className="project-element"> .002
          <p>
            covid-19 simulator
          </p>
        </div>
        <div className="project-element"> .003
        <p>
           RateMyFood UCLA
          </p>
        </div>
      </div>

    </div>
  )
}
