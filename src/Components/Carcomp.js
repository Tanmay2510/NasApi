import React from 'react'
import "./Carcomp.css"
import { useNavigate} from 'react-router-dom';
import { motion } from "framer-motion"
import { Button } from '@mui/material';

export var browse;
function Carcomp(props) {
  const navigate = useNavigate();
  var bust = {
    width:"25vw",
    height:"2.5vw",
    fontSize:"1vw"
  }
  const  navig = () => {
       browse="/"+props.namee;
      navigate(browse);
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
    <img src = {props.name} alt = "planets" style={props.st}></img>
    </div>
    <div className='arbut'>
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
     
    }}>
    <Button style={bust} color="secondary" onClick={navig} variant="outlined">Read More About {props.namee}...</Button>
    </motion.div>
    </div>
  
    </div>
  );
}

export default Carcomp