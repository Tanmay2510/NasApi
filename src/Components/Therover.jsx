import { useNavigate } from 'react-router-dom'
import "./Therover.css"
import axios from 'axios'
import React, { useState , useEffect } from 'react'
import {motion} from 'framer-motion'
import {FaPlay, FaPause} from 'react-icons/fa';
import Lowernav from './Lowernav'

function Therover(props) {
 
  
  const [dat,setdata]=useState({});
  const [isdateenter , setdateenter] = useState(false);
  const [thedate,setthedate] = useState("");
const [index, setIndex] = useState(0);
const [playSlide, setPlaySlide] = useState(false);

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
          console.log(response.data.photos.length)
          if(response.data.photos.length === 0){
              navigate("/WHAT")
            }
          setdateenter(true)
        
        }).catch(err=>{
          navigate("/WHAT");
        })
      }
    }
   var arr=[];
   // eslint-disable-next-line array-callback-return
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
      var totimg = arr.length;
      useEffect(() => {
        if(playSlide){

        const handleAutoplay = setInterval(next, 3000);
        return () => clearInterval(handleAutoplay);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [next]);
      
      return (
    <div   style={style}>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}className='formarg'>
    <div className='morph'>
    <h1 className='heh' onClick={nav}>{props.nam}</h1>
    <hr  className="hhhh"></hr>
    {
    isdateenter ?
       <motion.div
       initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
       >
       {dat.photos ?
        <div>
        <div className='ins'>
        <p>Camera: {dat.photos[index].camera.full_name}</p>
        </div>
        <div className='ins'>
        <p>Total Images:{totimg}   &nbsp;&nbsp;</p>
        <p>Solar day on Mars:{dat.photos[index].sol}(Sol) &nbsp;&nbsp;</p>
        <p>Status:{dat.photos[index].rover.status} &nbsp;&nbsp;  </p>
        </div>
              <h5>{index+1}/{totimg}</h5>
        <img src={arr[index]} alt="rovPhotos" className='rovph' />
        <div className='th4'>
        <motion.button   whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}onClick={prev} className="but">&lt;</motion.button>
          {playSlide
            ?
            <FaPause className="fa-icon ii"  size={20} onClick={()=>setPlaySlide(!playSlide)}/>
            :
            <FaPlay className="fa-icon ii"  size={20} onClick={()=>setPlaySlide(!playSlide)}/>
        }
        <motion.button   whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}onClick={next} className="but">&gt;</motion.button>
           </div>
           </div>
        : null} </motion.div>
    : 
    <div>

    <div className='part'>
                <div className='partc'>
                  <p>Mission Type: {props.t}</p>
                  <p>Operator: {props.o}</p>
                  <p>Status: {props.s}</p>
                  <p>Launching date: {props.d}</p>
                  {props.l ? <p>Last contact: {props.l}</p> : null}
                </div>
                <img src={props.imm} alt="rovimg"></img>
              </div>
              <div className="bott">
                  <p>Objective: {props.g}</p>
                </div>
                </div>
              }
                <p className='fo'>For Rover Photos(Enter Date between {props.dt})</p>
                <input
                  defaultValue=""
                  placeholder="YYYY-MM-DD"
                  className="inp"
                  value={thedate} //final res of the user text
                  onChange={event => setthedate(event.target.value)}
                  onKeyPress={dateset}
                  type="text" /> 
     <hr  className="hhhh"></hr>

    <Lowernav />

    </div>

    </motion.div>   
    </div>
  )
}
export default Therover