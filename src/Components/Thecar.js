import React from 'react'
import './Thecar.css'
import Slider from "react-slick";
import Carcomp from './Carcomp';
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

     <Carcomp />
     <Carcomp />
     <Carcomp />
     <Carcomp />

      </Slider>
    </div>
  );
  }



export default Thecar