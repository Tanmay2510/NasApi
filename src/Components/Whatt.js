import React, { useState } from 'react'
import "./WHAT.css"
import {motion} from "framer-motion"
import "./WHAT.css";
import al from "../images/ali.png"

function Whatt() {
    const [isAct, setIsAct] =useState(false);

  return (
    <div>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}className='forfl'>
    <div className='what'>
    <p>No Asteroids!!!</p>
    <p>GO Back</p>
    <motion.div
    className="mot"
    onClick={() => setIsAct(!isAct)}
    animate={{
      rotate: isAct ? 360 : 0
    }}>
    <img src={al} alt="ico"></img><br></br>
    </motion.div>
    
    <a href="/NEOW" className='lin'>Back to Asteroids</a>
    </div>
    </motion.div>
    </div>
  )
}

export default Whatt

