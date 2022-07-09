import React from 'react'
import "./Carcomp.css"
function Carcomp(props) {
    
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
  
    </div>
  );
}

export default Carcomp