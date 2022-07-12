import React from 'react'
import "./Carcomp.css"
import { useNavigate} from 'react-router-dom';
import { motion } from "framer-motion"

import { Button } from '@mui/material';
function Carcomp(props) {
  const navigate = useNavigate();

  const  navig = () => {
      var browse="/"+props.namee;
      navigate("/Planets");
  }
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
    <div className='arbut'>
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
     
    }}>

    <Button color="secondary" onClick={navig} variant="outlined">Read More About {props.namee}...</Button>
    </motion.div>
    </div>
  
    </div>
  );
}

export default Carcomp