import React from 'react'
import mars from "../icon/mars.png"
import neptune from "../icon/neptune.png"
import uranus from "../icon/uranus.png"
import saturn from "../icon/saturn.png"
import jupiter from "../icon/jupiter.png"
import earth from "../icon/earth.png"
import venus from "../icon/venus.png"
import sun from "../icon/sun.png"
import mercury from "../icon/mercury.png"
import "./Theotherhalf.css"
import { Draggable } from 'react-drag-reorder'
function Theotherhalf() {
  return (
    <div className='plan'>
     <Draggable>
       <img src={neptune} alt="neptune" className='nept'></img> 
       <img src={uranus} alt="uranus" className='ur'></img> 
       <img src={saturn} alt="saturn" className='sat'></img> 
       <img src={jupiter} alt="jupiter" className='jup'></img> 
       <img src={mars} alt="mars" className='mars'></img> 
       <img src={earth} alt="earth" className='ert'></img> 
       <img src={venus} alt="venus" className='vns'></img> 
       <img src={mercury} alt="mercury" className='merc'></img> 
     </Draggable>
     
     <img src={sun} alt="sun" className='sun'></img>
     

     </div>
  )
}

export default Theotherhalf