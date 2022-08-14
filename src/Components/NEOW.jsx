import React, { useState } from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import "./NEOW.css"
import { Grid } from '@mui/material'
import AnotherNav from "./AnotherNav"
import NEowcard from './NEowcard'
import Lowernav from './Lowernav'
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
import Whatt from './Whatt'
import { Navigate, useNavigate } from 'react-router-dom'
export var num;
function NEOW() {
  const nvgt = useNavigate();
    const [nowdate,setnowdate] = useState("");
    const [data,setdata]=useState({});
    const [issubmit,setissubmit] = useState(false);
    const ur = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${nowdate}&end_date=${nowdate}&api_key=${process.env.REACT_APP_API_KEY}`
    const datset = (event)=>{

        if(event.key === "Enter"){
        axios
        .get(ur)
        .then((response)=>{
        setdata(response.data);
        setissubmit(true);
        }

        ).catch(err=>{
          nvgt("/Whatt");
        })}}
      function handlee(e){
        setnowdate(e.target.value);       
      }

      var a;
      var a2;
      var obj;
      var arr=[];
      if(nowdate){
      Object.entries(data).map((ent) => {
         a = ent[1];
        })
        if(a){
        Object.entries(a).map((e)=>{
          a2=e[1];
          
        })
        if(a2){

        a2.forEach((info)=>{
          obj={
              name : info.name,
              abmg :info.absolute_magnitude_h,
              mink: info.estimated_diameter.kilometers.estimated_diameter_min,
              isph:info.is_potentially_hazardous_asteroid,
              clapdt: info.close_approach_data[0].close_approach_date_full,
              clrelvel: info.close_approach_data[0].relative_velocity.kilometers_per_hour,
              misdis: info.close_approach_data[0].miss_distance.lunar,
              orbeth: info.close_approach_data[0].orbiting_body,
          }
          
          // near_earth_objects['2020-10-10'][2].is_sentry_object
          arr.push(obj);
        })
        }
        }
      }
      if(data.element_count===0  ){
        nvgt("/Whatt");
      }

      function createcard(emo){
        return(
            <motion.div className='cc'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}> 
            <NEowcard
            name={emo.name}
            ab={emo.abmg}
            mi={emo.mink}
            is={emo.isph}
            cl={emo.clapdt}
            cr={emo.clrelvel}
            ms={emo.misdis}
            or={emo.orbeth}
            
            />
          </motion.div>
        )
      }
     
      return (
    <div className='cont'>
    <AnotherNav />
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="neo">
        {
            issubmit ?
            <div >   
          
            
          {
            <div className="ca ">
      <h1>Number of Asteroids: {a2 ? a2.length : 0}</h1>
         <div className="side">
          <img src={ztf} name="ztf" className="zt"
          ></img>
          <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
          <p>0-10Ld</p></a>
         
         <img src={twttf} name="twttf"  id="tt"></img> <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
          <p >10-20Ld</p></a>
         <img src={ttff} name="ttff" id="ttt"></img> 
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>20-30Ld</p></a>
         <img src={thttf} name="thttf" id="ttf"></img>
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>30-40Ld</p></a>
         <img src={tftft} name="tftft" id="fff"></img>  
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>40-50Ld</p></a>
         <img src={fttff} name="fttff" id="fs"></img> 
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>50-60Ld</p></a>
         <img src={ftt} name="ftt" id="sss"></img> 
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>60-70Ld</p></a>
         <img src={ffttw} name="ffttw" id="se"></img>  
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>70-80Ld</p></a>
         <img src={fftfif} name="fftfif" id="en" ></img> 
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>80-90Ld</p></a>
         <img src={tftth} name="tftth" id="nn"></img> 
         <a href="https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)">
         <p>&#62;90Ld</p></a>
         </div>
      <div className="midsi">
         
            {
              arr.map(createcard)
            }   
      
</div>
      </div>

            }
            </div>
            :
            <div className="imbg">
            <h1>Get information about Near Earth Objects(NEO) </h1>
            <p style={{fontSize:'1.9em'}}>Enter Date</p>
            <input type="text" className="in" placeholder="YYYY-MM-DD" onChange={handlee}  onKeyPress={datset}></input>
            </div>
        }
        <div style={{marginTop:"-50px"}}>
        <Lowernav />
        </div>

    </motion.div>
    </div>
  )
}
export default NEOW


