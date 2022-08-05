import React ,{useState} from 'react'
import "./NEowcard.css"


function NEowcard(props) {
  const[isopen,setisopen] = useState(true);
  return (
    
    <div  className="all">
 
    {
          
      isopen ? 



      <div onClick={()=>{setisopen(!isopen)}} >
      <p>Asteroid name: {props.name}</p>
      <p>Absolute magnitude: {props.ab}h</p><br></br>
        
        </div>
   
      :
   
    <div onClick={()=>{setisopen(!isopen)}}>
    <p>Asteroid name: {props.name}</p>
      <p>Absolute magnitude: {props.ab}h</p>
    <p>Minimum diameter: {props.mi}km</p>
    <p>Closest approach: {props.cl}</p>
    <p>Relative velocity: {props.cr}kmph</p>
    <p>Miss Distance: {props.ms}km</p>
    <p>Orbiting body: {props.or}</p>
    </div>

  }
    </div>
   
  )
}

export default NEowcard