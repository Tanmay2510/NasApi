import React  from 'react'
import AnotherNav from "./AnotherNav.js"
import "./Nav.css";
import Bgsvg from './Bgsvg.js';
import Navcard from './Navcard.js';
import mar from "../images/navmars.jpg"
import pod from "../images/navapod.jpg"
import neow from "../images/navneow.jpg"
import {motion } from "framer-motion"
function Nav() {

  const astp="Data for near-earth Asteroid information. You can: search for Asteroids based on their closest approach date to Earth, and look up a specific Asteroid with its NASA JPL.";
  const marp="Get access to photos from the rover that are present on mars.Rovers help scientists in their quest to understand what different parts of the planet are made of."; 
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}} className='ob'>
    <AnotherNav />
      <div className="bggg b" >


        
        <Navcard
        name="/MarsPhoto"
        hd="Mars Rover"
      pp="
      Through this, you can get photos from the rover that are or were present on mars.Rovers are:" 
      n1="Spirit"
      n2="Persevarance"
      n3="Opportunity"
      n4="Curiosity"
        but="Go to Mars Photos"
        p4="
        Rovers help scientists in their quest to understand what different parts of the planet are made of."
               sr={mar}
               wimg={marp}
        />
        <Navcard 
        name="/APOD"
        hd="APOD"
        pp="APOD: Astronomy Picture of the Day. Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.Astronomy is the study of everything in the universe beyond Earth's atmosphere. That includes objects we can see with our naked eyes, like the Sun, the Moon, the planets,and the stars."
        but="Go to APOD" 
        sr={pod} 
        wimg="
        APOD: Astronomy Picture of the DayEach day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer."      
        />
        <Navcard 
        name="/NEOW"
        hd="Asteroids"
        pp={astp}
        p2="Asteroids are small, rocky objects that orbit the Sun. Although asteroids orbit the Sun like planets, they are much smaller than planets. There are lots of asteroids in our solar system."
        but="Go to Asteriods"
        sr={neow}
        wimg={astp}
        /> 
      </div>
     <Bgsvg />
     <Bgsvg />
    </motion.div>
  )
}

export default Nav;