import React from 'react'
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const navv = () => {
    navigate("/")
  }
  return (
    <div className='theicons'>
    <Draggable>
    <img src={mercury} alt="mercury"></img> 
    <img src={earth} alt="earth"></img>
    <img src={uranus} alt="uranus"></img>
    <img src={jupiter} alt="jupiter"></img>
    </Draggable>
    <div className='wholename'>
    <div className='icons'>
    <Theico />
    </div>
    <h2 onClick={navv} className="anav">NAPP</h2>
    </div>
    <Draggable>
    <img src={mars} alt="mars"></img>
    <img src={saturn} alt="saturn"></img> 
    <img src={neptune} alt="neptune" ></img>
    <img src={venus} alt="venus"></img>
     </Draggable>
     </div>

  )
}

export default AnotherNav