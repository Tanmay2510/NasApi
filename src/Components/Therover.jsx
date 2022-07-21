import { useNavigate } from 'react-router-dom'
import "./Therover.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Therover(props) {
  const [dat,setdata]=useState({});
  const [isdateenter , setdateenter] = useState(false);
  const [thedate,setthedate] = useState("");
    const navigate = useNavigate();
    const nav = () =>{
        navigate("/Marsphoto")
    }
    const ur = `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.nam}/photos?earth_date=${thedate}&api_key=${process.env.REACT_APP_API_KEY}`;    
    const style = {
        backgroundImage:"url("+props.imm+")",
        width:"100%",
        height:'100vh',
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",

    }
    const dateset =(event) => {
      if (event.key === 'Enter') {

        axios.get(ur).then((response) => {
          setdata(response.data);
          console.log(ur);
          setdateenter(true)
        })
      }
    }
    //img fullname sol status
  return (
    <div style={style}>
    <div className='formarg'>
    <div className='morph'>
    <h1 className='heh' onClick={nav}>{props.nam}</h1>

    
    <hr  className="hhhh"></hr>
    {
    isdateenter ?
      <p>{dat.photos ? dat.photos.map((info) =>{
          return (<div>
            <p>{info.sol} {info.camera.full_name} {info.rover.status}</p>
            <p>{info.img_src}</p>
            </div>
            )
      }) 
        
        : null}</p>
    : 
    <>
    
    <div className='part'>
                <div className='partc'>
                  <p>Mission Type: {props.t}</p>
                  <p>Operator: {props.o}</p>
                  <p>Status: {props.s}</p>
                  <p>Launching date: {props.d}</p>
                  {props.l ? <p>Last contact: {props.l}</p> : null}

                </div>

                <img src={props.imm}></img>
              </div>
              <div className="bott">
                  <p>Objective: {props.g}</p>
                </div>
                </> 
              }
                <p className='fo'>For Rover Photos(Enter Date between {props.dt})</p><input
                  defaultValue=""
                  placeholder="YYYY-MM-DD"
                  className="inp"
                  value={thedate} //final res of the user text
                  onChange={event => setthedate(event.target.value)}
                  onKeyPress={dateset}
                  type="text" />
          
    
    </div>
    </div>
    
    
    
    </div>
  )
}

export default Therover