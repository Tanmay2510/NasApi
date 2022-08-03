import React, { useState } from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import "./NEOW.css"
import NEowcard from './NEowcard'
import Grid from '@mui/material/Grid';

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
    })
}
} 
      // var len = data.element_count;
      
      // near_earth_objects[nowdate].close_approach_data[0].close_approach_date
      // near_earth_objects[nowdate].name
      // near_earth_objects[nowdate].absolute_magnitude_h
      function handlee(e){
        setnowdate(e.target.value);       
      }
      var a;
      var a2;
      if(nowdate){
          console.log(nowdate)
      Object.entries(data).map((ent) => {
         a = ent[1];
        })
        Object.entries(a).map((e)=>{
          a2=e[1];
        })
      }
      console.log(a2);
      
      
        
      return (
    <div className='cont'>
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="neo">
        {
            issubmit ?
            <div>
            
            <Grid container rowSpacing  = {2} spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3}>
          {
           
          }
        </Grid>
    
    </Grid>

           </div>

            :
            <div>
            <h1>Get information about Near Earth Objects(NEO) </h1>
            <p>Enter Date</p>
            <input type="text" className="in" placeholder="YYYY-MM-DD" onChange={handlee}  onKeyPress={datset}></input>
            </div>
        }
    </motion.div>
    </div>


  )
}

export default NEOW