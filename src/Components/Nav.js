import React from 'react'
import AnotherNav from "./AnotherNav.js"
import "./Nav.css";
function Nav() {


  return (
    <div>
    <AnotherNav />
      <div className="bggg b" >
      <div className="box2">
      <h1>Mars Rover</h1>
      <p>Through this, you can get photos from the rover that are or were present on mars.Rovers are: </p>
        <li>Spirit</li>
        <li>Curiosity</li>
        <li>Perseverance</li>
        <li>Opportunity</li>
        <button className='b1 bu'  >
        Go to Mars Photos
      </button>
    </div>
<svg width='500' height='500' className='v'>

       <path   fill ="#f2a2f5" fillOpacity="0.7"  >
       <animate attributeName='d'dur='10s' repeatCount='indefinite'
       values=' 
          M458.5,320Q443,390,370.5,394.5Q298,399,235.5,442.5Q173,486,143,417.5Q113,349,71.5,299.5Q30,250,43.5,180Q57,110,125,92Q193,74,259,46.5Q325,19,384,64Q443,109,458.5,179.5Q474,250,458.5,320Z;
          M461.5,319Q440,388,378,420.5Q316,453,247.5,461.5Q179,470,146.5,409.5Q114,349,82.5,299.5Q51,250,101.5,214.5Q152,179,179.5,148Q207,117,262,79.5Q317,42,339.5,105Q362,168,422.5,209Q483,250,461.5,319Z;
          M390,283.5Q342,317,321,360Q300,403,255.5,386Q211,369,176.5,349Q142,329,81.5,289.5Q21,250,67,200Q113,150,151.5,108Q190,66,251,62Q312,58,374.5,86Q437,114,437.5,182Q438,250,390,283.5Z;
          M435,300Q387,350,349,393.5Q311,437,263,397.5Q215,358,153,361.5Q91,365,73.5,307.5Q56,250,99.5,211Q143,172,163,107.5Q183,43,245,58.5Q307,74,357.5,104.5Q408,135,445.5,192.5Q483,250,435,300Z;
          M458.5,320Q443,390,370.5,394.5Q298,399,235.5,442.5Q173,486,143,417.5Q113,349,71.5,299.5Q30,250,43.5,180Q57,110,125,92Q193,74,259,46.5Q325,19,384,64Q443,109,458.5,179.5Q474,250,458.5,320Z

       '/>
       </path>
</svg>
       
     
<div className="box2">
<h1>Asteriods....</h1>
<p>Data for near-earth Asteroid information. You can: search for Asteroids based on their closest approach date to Earth, and look up a specific Asteroid with its NASA JPL.</p>
<p>Asteroids are small, rocky objects that orbit the Sun. Although asteroids orbit the Sun like planets, they are much smaller than planets. There are lots of asteroids in our solar system.</p>
<button  className='b2 bu' >
    Go to Asteriods
      </button>
</div>
 
      </div>
    </div>
  )
}

export default Nav;