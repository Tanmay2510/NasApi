import React from 'react'
import './Thecar.css'
import Slider from "react-slick";

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
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
  }



export default Thecar