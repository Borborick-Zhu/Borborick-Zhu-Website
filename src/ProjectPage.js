import React, { useState } from 'react'
import tyson1 from './assets/tyson1.gif';
import tyson2 from './assets/tyson2.gif';
import tyson3 from './assets/tyson3.gif';
import tyson4 from './assets/tyson4.gif';
import MenuBar from './MenuNav.js'


export default function ProjectPage() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);
  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleMouseOver2 = () => {
    setHovering2(true);
  };

  const handleMouseOut2 = () => {
    setHovering2(false);
  };

  const handleMouseOver3 = () => {
    setHovering3(true);
  };

  const handleMouseOut3 = () => {
    setHovering3(false);
  };

  const handleMouseOver4 = () => {
    setHovering4(true);
  };

  const handleMouseOut4 = () => {
    setHovering4(false);
  };

  return (
    <div>
      <MenuBar/>
      <div className="home">
        <h1 className="project-title"> PROJECTS </h1>
        <div className="project-grid">
          <div className="project-element"
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
          {isHovering && (
            <div className="grid-content">
              <h3>taskit app</h3>
              <p>
                technologies: swift, swiftui, xcode
              </p>
              <p>
                in collaboration with: vivian wang + brianna kim 
              </p>
              <p className="spacer-para">
                A simple to-do-list app aimed towards college students that have weekly 
                tasks to be completed such as lectures, discussions and homework. 
                <br/>
                Allows students to set recurring tasks on a weekly, fortnightly, monthly
                or even yearly basis!
              </p>
              <a className="github-link" href="https://github.com/Borborick-Zhu/taskit">github</a>
            </div>
          )}
          {!isHovering && (
            <div>
              <img className="project-image" src={tyson1} alt=""/>
              <h3>.001</h3>
              <p>
                taskit app
              </p>
              <p>
                Sep 2021
              </p>
              <p>img: @tysonparks</p>
            </div>
          )}
        </div>

        <div className="project-element" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
          {isHovering2 && (
            <div className="grid-content">
              <h3>covid-19 simulator</h3>
              <p>
                technologies: javascript, p3
              </p>
              <p>
                in collaboration with: myself
              </p>
              <p className="spacer-para">
                A visual simulation of how covid-19 can spread in a closed environment. 
                Allows people to change infection parameters to see how the spread can change
                with varying percentage of people vaccinated.
                <br/>
                Can be used as an educational site that allows people to see how quickly covid can spread.
              </p>
            <a className="github-link" href="https://borborick-zhu.github.io/covid-19-simulator/">demo</a>
            </div>
          )}
          {!isHovering2 && (
            <div>
              <img className="project-image" src={tyson2} alt=""/>
              <h3>.002</h3>
              <p>
                covid-19 simulator
              </p>
              <p>
                Sep 2022
              </p>
              <p>img: @tysonparks</p>
            </div>
          )}
        </div>

        <div className="project-element" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}> 
            {isHovering3 && (
              <div className="grid-content">
                <h3>ratemyfood UCLA</h3>
                <p>
                  technologies: react, node, firebase, javascript
                </p>
                <p>
                  in collaboration with: caspar broekhuizen, michael reed, akash banerjee, brandon mcmahan
                </p>
                <p className="spacer-para">
                  A fully functioning app that allows students to rate the UCLA dining hall foods. The foods are updated daily 
                  and will enable students to grasp an understanding of which dining hall foods are hot right now. 
                  <br/>
                  Users can also see the average rating of foods from before (if there are repeated foods)
                </p>
              <a className="github-link" href="https://638a4f27a62879636186abb0--ratemyfood.netlify.app/">demo</a>
            </div>
            )}

            {!isHovering3 && (
              <div>
                <img className="project-image" src={tyson3} alt=""/>
                <h3>.003</h3>
                <p>
                  ratemyfood UCLA
                </p>
                <p>
                  Dec 2022
                </p>
                <p>img: @tysonparks</p>
              </div>
            )}
        
        </div>

        <div className="project-element" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}> 
            {isHovering4 && (
              <div className="grid-content">
                <h3>Vagabond</h3>
                <p>
                  technologies: react, node, firebase, javascript, OpenAI API
                </p>
                <p>
                  in collaboration with: caspar broekhuizen
                </p>
                <p className="spacer-para">
                  A travel website that enables a fast synthesis of ideas for your next travel destination. 
                  <br/>
                  Simply select your interests, select the location you wish to travel to and our AI will provide the best attractions in that specific area!
                </p>
              <a className="github-link" href="https://vagabond-lahacks.netlify.app">demo</a>
            </div>
            )}

            {!isHovering4 && (
              <div>
                <img className="project-image" src={tyson4} alt=""/>
                <h3>.004</h3>
                <p>
                  Vagabond
                </p>
                <p>
                  April 2023
                </p>
                <p>img: @tysonparks</p>
              </div>
            )}
        
        </div>
      </div>

    </div>
    </div>
    
    
  )
}
