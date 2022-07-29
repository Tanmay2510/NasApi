import React, { useState } from 'react'
import "./WHAT.css"
import {motion} from "framer-motion"
import al from "../images/ali.png"
function Notdate() {
  const [isActive, setIsActive] =useState(false);

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}className='forfl'>
    <div className='what'>
    <p>NO PHOTOS!!!</p>
    <p>GO Back</p>
    <motion.div
    className="mot"
    onClick={() => setIsActive(!isActive)}
    animate={{
      rotate: isActive ? 360 : 0
    }}>
    <img src={al}></img><br></br>
    </motion.div>
    
    <a href="/Marsphoto" className='lin'>Back to rovers</a>
    </div>
    </motion.div>

  )
}

export default Notdate