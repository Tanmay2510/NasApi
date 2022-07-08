import React from 'react'
import './Thecar.css'
import Slider from "react-slick";
import Carcomp from './Carcomp';
import earthh from "../images/earthh.png"
import mercuryy from "../images/mercuryy.png"
import venuss from "../images/venuss.png"
import marss from "../images/marss.png"
import jupiterr from "../images/jupiterr.png"
import saturnn from "../images/saturnn.png"
import uranuss from "../images/uranuss.png"
import neptunee from "../images/neptunee.png"
function Thecar() {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
   
 
  };
  var st={
    width:"10%"
  }
  
  return (
    <div className='cara'>
      <h2 className='thepl'> The Planets</h2>
      <Slider {...settings}>
      <Carcomp 
      name={mercuryy}
      />
      <Carcomp 
      style={{st}}  

      name={venuss}
      /> 
     <Carcomp 
     name={earthh}
     />
     <Carcomp 
     name={marss}
     />
     <Carcomp 
     name={jupiterr}
     />
     <Carcomp 
     name={saturnn}
     />
     <Carcomp 
     name={uranuss}
     />
     <Carcomp 
     name={neptunee}
     />
    

      </Slider>
    </div>
  );
  }



export default Thecar