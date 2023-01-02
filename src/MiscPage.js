import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ztmy from './assets/ztmy.jpg';
import dave from './assets/dave.jpg';
import MenuNav from './MenuNav.js'


export default function MiscPage() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleMouseOver4 = () => {
    setHovering4(true);
  };

  const handleMouseOut4 = () => {
    setHovering4(false);
  };

  return (
    <div>
      <MenuNav/>
      <div>
        <div className="home">
          <div>
            <p className="misc-blurb">Just a place for you to learn more about me and for me to experiment! Try hovering over
              each element.The images below are my current favourite artists. 
            </p>
            <br/>
          </div>
        </div>
        <div className="misc-grid">
          <div className='misc-grid-element' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
            {!isHovering && (
              <img className='misc-image' src={ztmy} alt=""/>
            )}

            {isHovering && (
              <div className="misc-description">
                
                  <h2>Top Artists</h2>
                  <p> In no particular order:</p>
                  <ul>
                    <li>ZUTOMAYO</li>
                    <li>SANTAN DAVE</li>
                    <li>CENTRAL CEE</li>
                    <li>CO SHU NIE</li>
                    <li>ANO</li>
                  </ul>
                
                
                  <h2>Top Albums</h2>
                    <p> In no particular order:</p>
                    <ul>
                      <li>HISOHISO BANASHII</li>
                      <li>PSYCHODRAMA</li>
                      <li>HER LOSS</li>
                      <li>MAAD CITY</li>
                    </ul>
                  
                  <h2>Fav Brands</h2>
                  <p> In particular order:</p>
                  <ul>
                    <li>Vuja De</li>
                    <li>Cole Buxton</li>
                    <li>Olive</li>
                    <li>Muji</li>
                  </ul>

                  <h2>Fav Anime</h2>
                  <p> In particular order:</p>
                  <ul>
                    <li>Hunter x Hunter</li>
                    <li>Mushoku Tensei</li>
                    <li>Kaguya-sama: Love is War</li>
                    <li>Re:Zero</li>
                    <li>Chainsaw Man</li>
                  </ul>

                  <h2>Book Reccs</h2>
                  <p> In no particular order:</p>
                  <ul>
                    <li>Can't Hurt Me</li>
                    <li>Essentialism</li>
                    <li>Atomic Habits</li>
                    <li>12 Rules for Life</li>
                  </ul>
                
                
              </div>
            )}
            
            
            
          </div>
          <div className='misc-grid-element' onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}> 
            
            {!isHovering4 && (
              <img className="misc-image" src={dave} alt=""/>
            )}
            
            {isHovering4 && (
              <div className="misc-description">
                <h2>Coding Languages</h2>
                  <p>Languages: </p>
                  <ul>
                    <li>C, C++</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Lisp</li>
                    <li>Shell</li>
                    <li>Swift, SwiftUI</li>
                  </ul>
                  <p>Technologies: </p>
                  <ul>
                    <li>Firebase </li>
                    <li>cheerio, axios</li>
                    <li>Node, React</li>
                  </ul>
                
                <h2>Honors + Awards</h2>
                <p>The following: </p>
                <ul>
                  <li>Deans Honor List W22, S22</li>
                  <li>Best First Year Project (UNSW)</li>
                  <li>First Place: Datathon Starterthon (UNSW)</li>
                </ul>

                <h2>Current Lifts</h2>
                <p>Just a side thing: </p>
                <ul>
                  <li>Bench: 275lbs</li>
                  <li>Squat: 315lbs</li>
                  <li>Deadlift: 375lbs</li>
                </ul>

                <h2>Extras</h2>
                <p>if youre still reading this far:  </p>
                <ul>
                  <li>Sports: UCLA Ultimate Frisbee, Tennis + Basketball</li>
                  <li>Fav Youtuber: KSI/ JJ Olatunji</li>
                  <li>Fav Meal: Dumplings</li>
                  <li>Fav Dessert: Ice Cream</li>

                </ul>
              </div>
            )}
          </div>
          
        </div>
      </div>`
    </div>
    
  )
}
