import React, { useState } from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import "./NEOW.css"
import NEowcard from './NEowcard'
function NEOW() {
    const [nowdate,setnowdate] = useState("");
    const [data,setdata]=useState({});
    const [issubmit,setissubmit] = useState(false);
    const ur = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${nowdate}&end_date=${nowdate}&api_key=${process.env.REACT_APP_API_KEY}`
    
    const datset = (event)=>{
        if(event.key === "Enter"){
        axios.get(ur).then((response)=>{
        console.log(response.data);
        setdata(response.data);
        setissubmit(true);
    })
}
} 
      var len = data.element_count;
      
      // near_earth_objects[nowdate][i].close_approach_data[0].close_approach_date
      // near_earth_objects[nowdate][i].name
      // near_earth_objects[nowdate][i].absolute_magnitude_h
      function handlee(e){
        setnowdate(e.target.value);       
      }
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
            
           <NEowcard />

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