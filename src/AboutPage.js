import React from 'react';
import abstractImage from './assets/ericaanderson.gif';
import treeHug from './assets/Image.png';
import MenuNav from './MenuNav.js'



export default function AboutPage() {
    


    return (
        
    <div className="home">
        <MenuNav/>
        <img className="abstract-image" src={abstractImage} alt=""/>
        <img className="tree-hug" src={treeHug} alt=""/>
        <p className="credits"> background: @ericaanderson</p>
        
        
        <h1 className="about-me-title">About Me</h1>
        <div className="about-blurb">
            <p>
                I am a Sophomore at UCLA studying CS but I'm actually from Sydney. 
                People often have trouble pronouncing my name so just call me Bobo.
            </p>
        </div>
        <div className="about-blurb">
            <ul>
                <li> Incoming SDE Intern @ Amazon </li>
                <li> ACM External Affairs Director </li>
                <li> Love Playing Sports</li>
            </ul>
        </div>

        <div className="about-blurb">
            <p>
                I am super interested in the intersection between CS and Health - more notably
                how Computer Software can eventually detect early onsets of mental illness, chronic 
                illness and even heart attacks + strokes. 
            </p>
            <p>
                Apart from coding, I love anything related to eating, cooking. If I did not code, I would
                have gone to culinary school. I also play a lot of sports which include: Ultimate Frisbee, Tennis
                Basketball, Volleyball).
            </p>
        </div>
        <div className="blank"></div>
    </div>
    )
}


