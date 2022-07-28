import React from 'react'
import './Navcard.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
function Navcard(props) {
  const [isopen,setisopen] = useState(false);
    const navigate = useNavigate();
    const nav = () =>{
        navigate(props.name)
    }
  return (
    <motion.div   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}} className="box2" >
    <h1 onClick={()=>{setisopen(!isopen)}}>{props.hd}</h1>
    {
        isopen ? 
        <motion.div   initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
        <p >{props.pp}</p>
        <p >{props.p2}</p>
        {
            props.n1  ? 
            <li >{props.n1}</li>
            :null
        }
        {
            props.n2  ? 
            <li >{props.n2}</li>
            :null
        }
        {
            props.n3  ? 
            <li >{props.n3}</li>
            :null
        }
        {
            props.n4  ? 
            <li >{props.n4}</li>
            :null
        }   
        <p className='p4' >{props.p4}</p>
        <button  className='bu' onClick={nav}>{props.but}      </button>

        </motion.div>
        :
        <div >
    <motion.img  initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}   src={props.sr}></motion.img>
    <motion.p   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}>{props.wimg}<span onClick={()=>{setisopen(!isopen)}} style={{cursor:"pointer"}}> (Read more..)</span></motion.p>
    </div>
    }
    </motion.div>

  )
}
export default Navcard