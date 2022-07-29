import React from 'react'
import axios from "axios"
import {motion} from "framer-motion"
function NEOW() {
    const ur = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-10-10&end_date=2020-10-17&api_key=${process.env.REACT_APP_API_KEY}`
    
       const cl = () =>{

        axios.get(ur).then((response)=>{
            console.log(response.data);
        })
       }

    return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
    <h1 onClick={cl}>Ckic</h1>
    </motion.div>
  )
}

export default NEOW