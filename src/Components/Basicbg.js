import React from "react";
import {motion} from "framer-motion"
import "./Basicbg.css"
import Model from "./Model";
import { browse } from './Carcomp';
import Data from './Data.js'
import AnotherNav from "./AnotherNav";
import Lowernav from "./Lowernav";
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
          <AnotherNav />
     <hr  className="hh"></hr>

     <div className="themid">
     <motion.div initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.4}}className="content">
<p>
      <h2>{hh}:</h2>
      <br></br>{cc}</p>
      </motion.div>
     
      <Model />
     </div>
     <hr  className="hh"></hr>

     <Lowernav />

     </div>
  )
}
export default Basicbg