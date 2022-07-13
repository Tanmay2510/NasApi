import React from 'react'
import mars from "../icon/mars.png"
import neptune from "../icon/neptune.png"
import uranus from "../icon/uranus.png"
import saturn from "../icon/saturn.png"
import jupiter from "../icon/jupiter.png"
import earth from "../icon/earth.png"
import venus from "../icon/venus.png"
import Particl from './Particl';
import { Draggable } from 'react-drag-reorder'
import "./Basicbg.css"
import mercury from "../icon/mercury.png"
function Basicbg() {
  return (
    <div className='bg'>
    <Particl />
    <div className='theicons'>
    <Draggable>
       <img src={neptune} ></img>
     </Draggable>

     <Draggable>

     <img src={uranus} ></img> 
     </Draggable>
     <Draggable>

     <img src={saturn} ></img> 
     </Draggable>
     <Draggable>

     <img src={jupiter}></img> 
     </Draggable>
     <Draggable>

     <img src={mars} ></img> 
     </Draggable>

     <Draggable>

     <img src={earth}></img> 

     </Draggable>
     <Draggable>

     <img src={venus}></img> 

     </Draggable>
     <Draggable>

     <img src={mercury} ></img> 
     </Draggable>
    </div>
    </div>
  )
}

export default Basicbg