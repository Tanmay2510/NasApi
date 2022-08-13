import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnotherNav from './AnotherNav'
import "./LinkPlanet.css"
import {motion} from "framer-motion"
import Lowernav from './Lowernav'
function LinkPlanet() {
  const apod = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
  const [data,setData] = useState({});
  useEffect(() =>{
    axios.get(apod).then((response) => {
        setData(response.data);
    })
  },[])
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
        <AnotherNav />

        <div  className="forfont">
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}className="theh">
        <h1>Name: {data ? data.title :null}</h1>
        </motion.div>
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}} className="contp">
        <p> {data ? data.explanation : null }</p>
        </motion.div>  
     <hr  className="hhh"></hr>

     <div className="box">
        <div className='b1'>
        <img className="timg" src = {data ? data.hdurl : null } alt="Theimage"></img>
        </div>
        <div className="belline">
        <p className="belp">Image Date:{data ? data.date :null}</p>
      
        <p>Image Copyright: ©   {data.copyright ?data.copyright:"NASA"}</p>
         
        </div>
     </div>

        <div style={{marginTop:"-10px"}}>
        <hr  className="hhh"></hr>

<Lowernav />
</div>


        </div>
    </motion.div>
  )
}

export default LinkPlanet