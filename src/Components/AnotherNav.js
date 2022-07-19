import React from 'react'
import Theico from '../icon/Theico';
import mars from "../icon/mars.png"
import neptune from "../icon/neptune.png"
import uranus from "../icon/uranus.png"
import saturn from "../icon/saturn.png"
import jupiter from "../icon/jupiter.png"
import earth from "../icon/earth.png"
import venus from "../icon/venus.png"
import { Draggable } from 'react-drag-reorder'
import mercury from "../icon/mercury.png"
import "./Basicbg.css"
function AnotherNav() {
  return (
    <div className='theicons'>
    <Draggable>
    <img src={mercury} ></img> 
    <img src={earth}></img>
    <img src={uranus} ></img>
    <img src={jupiter}></img>
    </Draggable>
    <div className='wholename'>
    <div className='icons'>
    <Theico />
    </div>
    <h2>NAPP</h2>
    </div>
    <Draggable>
    <img src={mars} ></img>
    <img src={saturn} ></img> 
    <img src={neptune} ></img>
    <img src={venus}></img>
     </Draggable>
     </div>

  )
}

export default AnotherNav