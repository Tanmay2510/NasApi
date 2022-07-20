import React from 'react'
import "./Therover.css"
function Therover(props) {
    const style = {
        backgroundImage:"url("+props.imm+")",
        width:"100%",
        height:'100vh',
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",

    }
  return (
    <div style={style}>
    <div className='formarg'>
    <div className='morph'>
    <h1 className='heh'>{props.nam}</h1>
    <div className='part'>
    <div className='partc'>
    <p>Mission Type: {props.t}</p>
    <p>Operator: {props.o}</p>
    <p>Status: {props.s}</p>
    <p>Launching date: {props.d}</p>
    {
        props.l ? <p>Last contact: {props.l}</p> : null
    }
    
    </div>

    <img src={props.imm}></img>
    </div>
    <div className="bott">
    <p>Objective: {props.g}</p>
    <form>
    <p className='fo'>For Rovers Photos</p>
    <input
      name="fName"
      placeholder="Enter Date"
    /> <button>Submit</button>
    </form>
    </div>

    </div>
    </div>
    
    
    
    </div>
  )
}

export default Therover