import React ,{useState} from 'react'
import "./NEowcard.css"
import ztf from "./cardicon/ztf.svg";
import twttf from "./cardicon/twttf.svg";
import ttff from "./cardicon/ttff.svg";
import thttf from "./cardicon/thttf.svg";
import tftft from "./cardicon/tftft.svg";
import fttff from "./cardicon/fttff.svg";
import ftt from "./cardicon/ftt.svg";
import ffttw from "./cardicon/ffttw.svg";
import fftfif from "./cardicon/fftfif.svg";
import tftth from "./cardicon/tftth.svg";
import {motion} from "framer-motion";
function NEowcard(props) {
  const[isopen,setisopen] = useState(true);
var sr;
  if(props.ms>=0 && props.ms<=10){
      sr = ztf;
  }else if(props.ms>10 && props.ms<=20){
    sr = twttf;
}else if(props.ms>30 && props.ms<=30){
  sr = ttff;
}else if(props.ms>30 && props.ms<=40){
  sr = thttf;
}else if(props.ms>40 && props.ms<=50){
  sr = tftft;
}else if(props.ms>50 && props.ms<=60){
  sr = fttff;
}else if(props.ms>60 && props.ms<=70){
  sr = ftt;
}else if(props.ms>=70 && props.ms<=80){
  sr = ffttw;
}
else if(props.ms>80 && props.ms<=90){
  sr = fftfif;
}else if(props.ms>90){
  sr = tftth;
}

  return (
    <motion.div   className="all"
  
    whileHover={{ scale: 1.1 }}
      >
    {
          
      isopen ? 



      <div
      
     className="over" onClick={()=>{setisopen(!isopen)}} >
      <motion.img 
      onClick={() => setisopen(!isopen)}
      animate={{
        rotate: isopen ? 360 : 0
      }}className="hovvc" src={sr}></motion.img>
      <p>Asteroid name: {props.name}</p>
      <p>Absolute magnitude: {props.ab}h</p><br></br>
        
        </div>
   
      :
   
    <div 
    
    onClick={()=>{setisopen(!isopen)}}>
    <motion.img
    onClick={() => setisopen(!isopen)}
    animate={{
      rotate: isopen ? 360 : 0
    }} className="hovvc" src={sr}></motion.img>

    <p>Asteroid name: {props.name}</p>
      <p>Absolute magnitude: {props.ab}h</p>
    <p>Minimum diameter: {props.mi}km</p>
    <p>Closest approach: {props.cl}</p>
    <p>Relative velocity: {props.cr}kmph</p>
    <p>Miss Distance: {props.ms}ld</p>
    <p>Orbiting body: {props.or}</p>
    </div>
    
  }
  
    </motion.div>
   
  )
}

export default NEowcard