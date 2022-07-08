import React from 'react'
import "./Carcomp.css"
import Button from 'react-bootstrap/Button';

function Carcomp(props) {
    
  return (
    <div className='whole'>
    <h2 className='tp'>Planet {props.namee}</h2>
    <div className='tpi'>
    <p>
    {props.content}
   <br></br>
    {props.namee} size:  <br></br>
    {props.namee} gravity: <br></br>
    {props.namee} age:  <br></br>
    </p>



    
             
    <img src = {props.name} style={props.st}></img>
    </div>
    <Button variant="outline-secondary"> Read More...
</Button>
    </div>
  );
}

export default Carcomp