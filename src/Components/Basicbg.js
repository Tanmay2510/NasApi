import React from "react";
import Theico from '../icon/Theico';
import mars from "../icon/mars.png"
import neptune from "../icon/neptune.png"
import uranus from "../icon/uranus.png"
import saturn from "../icon/saturn.png"
import jupiter from "../icon/jupiter.png"
import earth from "../icon/earth.png"
import venus from "../icon/venus.png"
import { Draggable } from 'react-drag-reorder'
import "./Basicbg.css"
import mercury from "../icon/mercury.png"
import Model from "./Model";
import { browse } from './Carcomp';
import Data from './Data.js'
function Basicbg() {
  var hh;
  var cc;
 if(browse==="/Mercury"){
  hh=Data[0].Name;
    cc= Data[0].Dat;
  }else if(browse==="/Venus"){
    hh=Data[1].Name;
    cc= Data[1].Dat;
  }else  if(browse==="/Earth"){  
    hh=Data[2].Name;
    cc= Data[2].Dat;

  }
  else if(browse==="/Mars"){
    hh=Data[3].Name;
    cc= Data[3].Dat;
  }else if(browse==="/Jupiter"){
    hh=Data[4].Name;
    cc= Data[4].Dat;
  }else if(browse==="/Saturn"){
    hh=Data[5].Name;
    cc= Data[5].Dat;
  }else if(browse==="/Uranus"){
    hh=Data[6].Name;
    cc= Data[6].Dat;
  }else if(browse==="/Neptune"){
    hh=Data[7].Name;
    cc= Data[7].Dat;
  }
  return (
    <div className='bg'>
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
     <hr  className="hh"></hr>
     <div className="themid">
     <div className="content">
<p>
      <h2>{hh}:</h2>
      <br></br>{cc}</p>
      </div>
     
      <Model />
     
     </div>
    
     </div>
  )
}
export default Basicbg