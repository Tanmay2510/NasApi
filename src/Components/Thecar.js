import React from 'react'
import './Thecar.css'
import Slider from "react-slick";
import { Grid } from '@mui/material'
import sun from "../icon/sun.png"
function Thecar() {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
   
 
  };
  return (
    <div className='cara'>
      <h2 className='thepl'> The Planets</h2>
      <Slider {...settings}>

      <div >
          <h2 className='tp'>Mercury</h2>
          <div className='tpi'>
          <p>A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet </p>         
          <img src = {sun} ></img>
          </div>
          
          </div>

          <div >
          <h2 className='tp'>Mercury</h2>
          <div className='tpi'>
          <p>A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet </p>         
          <img src = {sun} ></img>
          </div>
          
          </div>
          <div >
          <h2 className='tp'>Mercury</h2>
          <div className='tpi'>
          <p>A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet
          A great planet which is a great planet </p>         
          <img src = {sun} ></img>
          </div>
          
          </div>



      
        
        

      </Slider>
    </div>
  );
  }



export default Thecar