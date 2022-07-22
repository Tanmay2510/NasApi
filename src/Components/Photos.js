import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick'
function Photos(props) {
    
  return (
    <div>
    <Carousel>
    <Carousel.Item>
   <img src={props.im}></img>
   </Carousel.Item>
   <Carousel.Item>
   <img src={props.im}></img>
   </Carousel.Item>
   </Carousel>
    
    
    </div>
  )
}

export default Photos