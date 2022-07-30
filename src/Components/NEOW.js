import React, { useState } from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import "./NEOW.css"
function NEOW() {
    const [nowdate,setnowdate] = useState("");
    const [data,setdata]=useState({});
    const [issubmit,setissubmit] = useState(false);
    console.log(nowdate)
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
            <h1>HII</h1>
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