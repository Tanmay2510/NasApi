import React from 'react'
import "./Carcomp.css"
import { motion } from "framer-motion"

import { Button } from '@mui/material';
export var eind ;
function Carcomp(props) {
  console.log(props.ind);
  eind=props.ind;
  return (
    <div className='whole'>
    <h2 className='tp'>Planet {props.namee}</h2>
    <div className='tpi'>
    <p>
    {props.content}

   <br></br>
    {props.namee} size: {props.siz} <br></br>
    {props.namee} gravity: {props.g}<br></br>
    {props.namee} age: {props.age} <br></br>
    </p>
    


    
             
    <img src = {props.name} style={props.st}></img>
    </div>
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}>
    <Button color="secondary"  variant="outlined">Read More...</Button>
    </motion.div>
  
    </div>
  );
}

export default Carcomp