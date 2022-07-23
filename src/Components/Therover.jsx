import { useNavigate } from 'react-router-dom'
import "./Therover.css"
import axios from 'axios'
import React, { useState , useEffect } from 'react'
import {motion} from 'framer-motion'
import { BiPlay } from 'react-icons/bi';
import Notdate from './Notdate'

function Therover(props) {
 
  
  const [dat,setdata]=useState({});
  const [isdateenter , setdateenter] = useState(false);
  const [thedate,setthedate] = useState("");
const [index, setIndex] = useState(0);

    const navigate = useNavigate();
    const nav = () =>{
        navigate("/Marsphoto")
    }
    const ur = `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.nam}/photos?earth_date=${thedate}&api_key=${process.env.REACT_APP_API_KEY}`;    
    const style = {
        backgroundImage:"url("+props.imm+")",
        minHeight:"100vh",
        height:"auto",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",

    }
 
    const dateset =(event) => {
      if (event.key === 'Enter') {

        axios.get(ur).then((response) => {
          setdata(response.data);
          console.log(ur)
          setdateenter(true)
        })
      }
    }
   var arr=[];
   Object.entries(dat).map((ent) => {
    ent[1].forEach((the) =>{
      arr.push(the.img_src)
    })
})
  const next = () => {
    index<arr.length-1?
    setIndex((i) => (i + 1) % arr.length):setIndex(0);
  };

  const prev = () => {
    index>0?
    setIndex((i) => (i - 1) % arr.length):setIndex(arr.length-1);
  };
  console.log(index)
      var totimg = arr.length;
   
  return (
    <div style={style}>
    <div className='formarg'>
    <div className='morph'>
    <h1 className='heh' onClick={nav}>{props.nam}</h1>
    <hr  className="hhhh"></hr>
    {
    isdateenter ?
       <div>
       {dat.photos ?
        <div >
        <div className='ins'>
        <p>Camera: {dat.photos[index].camera.full_name}</p>
        </div>
        <div className='ins'>
        <p>Total Images:{totimg}   &nbsp;&nbsp;</p>
        <p>Solar day on Mars:{dat.photos[index].sol}(Sol) &nbsp;&nbsp;</p>
        <p>Status:{dat.photos[index].rover.status} &nbsp;&nbsp;  </p>
        </div>
       
     
        <img src={arr[index]} alt="rovPhotos" className='rovph' />
        <motion.button   whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}onClick={prev} className="but">&lt;</motion.button>
        <motion.button   whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }} className="but">{<BiPlay />}</motion.button>
        
        <motion.button   whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}onClick={next} className="but">&gt;</motion.button>
           </div>
        : null} </div>
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