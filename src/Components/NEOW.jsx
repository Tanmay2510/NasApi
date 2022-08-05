import React, { useState } from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import "./NEOW.css"
import { Grid } from '@mui/material'
import AnotherNav from "./AnotherNav"
import NEowcard from './NEowcard'
import Lowernav from './Lowernav'
function NEOW() {
    const [nowdate,setnowdate] = useState("");
    const [data,setdata]=useState({});
    const [issubmit,setissubmit] = useState(false);
    const ur = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${nowdate}&end_date=${nowdate}&api_key=${process.env.REACT_APP_API_KEY}`
    const datset = (event)=>{
        if(event.key === "Enter"){
        axios.get(ur).then((response)=>{
        setdata(response.data);
        setissubmit(true);
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
              misdis: info.close_approach_data[0].miss_distance.kilometers,
              orbeth: info.close_approach_data[0].orbiting_body,
          }
          
          // near_earth_objects['2020-10-10'][2].is_sentry_object
          arr.push(obj);
        })
        }
        }
      }
      console.log(arr);
      function createcard(emo){
        return(
            <div className='cc'> 
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
          </div>
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
            <div className="ca">
         
            {
              arr.map(createcard)
            }   
      

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


