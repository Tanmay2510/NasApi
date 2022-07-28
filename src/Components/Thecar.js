import React from 'react'
import './Thecar.css'
import Carcomp from './Carcomp';
import earthh from "../images/earthh.png"
import mercuryy from "../images/mercuryy.png"
import venuss from "../images/venuss.png"
import marss from "../images/marss.png"
import jupiterr from "../images/jupiterr.png"
import saturnn from "../images/saturnn.png"
import uranuss from "../images/uranuss.png"
import neptunee from "../images/neptunee.png"
import Carousel from 'react-bootstrap/Carousel';
function Thecar() {
  const stt={
    marginRight:"10px",
    width:"450px",
    height:"450px"
  }
  const st ={
    marginTop:"10px"
  }
  const ea="4.543 billion years";
  const jma="4.603 billion years";
  const mnvus="4.503 billion years";
  const vc = `Named after the ancient Roman goddess of beauty, Venus is known for its exceptional brightness.
  The planet is the second closest planet to the sun, it's by far the hottest of the eight worlds in our solar system. Its thick atmosphere is mostly made of carbon dioxide with clouds of sulfuric acid, which traps the sun's heat and creates a runaway greenhouse effect.`;
  const mc = `Named for the fleet-footed Roman messenger god, Mercury is the closest planet to the sun, zipping around our parent star at an average of 36 million miles away.  Mercury is the fastest planet in the solar system, speeding along at about 29 miles per second and 
  completing each orbit around the sun in just 88 Earth days.`;
  const ec = `Earth, our home planet, is a world unlike any other. 
  The third planet from the sun, 
  Earth is the only place in the known universe confirmed to host life.
  Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.
  `;

  const jc=`Jupiter is the oldest and most massive world in the solar system.
  That includes the Great Red Spot, which is a massive hurricane-like storm called an anticyclone. It's far bigger and longer lasting than any tempests that have ever raged across our planet's surface: It rotates in an ever-present oval that's more than the width of the entire Earth, although it has been 
  shrinking for as long as humans have been observing it.`

  const nc =`Neptune, third most massive planet of the solar system and the eighth and outermost planet from the Sun.Neptune is named for the Roman god of the sea, who is identified with the Greek deity Poseidon, a son of the Titan Cronus and a brother of Zeus . 
  It is the second planet to have been found by means of a telescope. 
  Its discovery in 1846 was a remarkable combination of the application of solid Newtonian physics and a belief in a numerological scheme that later proved to be scientifically unfounded.`

  const uc=`Uranus, the seventh planet from the sun, may initially look like a bland, blue-green ball. But there's a lot to love about the icy giant, from its 13 rings to its 27 known moons to the fact that it may even rain diamonds from its hazy atmosphere.
  Uranus was the first of three planets in our solar system discovered thanks to the invention of the telescope`
  
  const sc=`Saturn was the most distant of the five planets known to the ancients. In 1610, Italian astronomer Galileo Galilei was the first to gaze at Saturn through a telescope.In 1659, Dutch astronomer Christiaan Huygens, using a more powerful telescope than Galileo's,
   proposed that Saturn was surrounded by a thin, flat ring.The rings of Saturn are the most extensive of any other planet. They cannot be seen without an unaided eye.`
  
  const mrc=`The red planet Mars, named for the Roman god of war, has long been an omen in the night sky. And in its own way, the planet’s rusty red surface tells a story of destruction. Billions of years ago, the fourth planet from the sun could have been mistaken for Earth’s smaller twin,
   with liquid water on its surface—and maybe even life.Mars rotates on its axis every 24.6 Earth hours, defining the length of a Martian day, which is called a sol (short for “solar day”).`
  return (
    <div className='cara'>
    
      <h1 className='thepl'> The Planets</h1>
      
      <Carousel  >
      <Carousel.Item style={{height:"450px"}}>
     
      <Carcomp 
      content={mc}
      ind='0' 
      namee={"Mercury"}
      name={mercuryy}
      g={" 3.7 m/s²"}
      age={mnvus}
      siz={" 4879.4(diameter in Km) || 38% the size of Earth"}
      />
      </Carousel.Item>
      <Carousel.Item style={{height:"450px"}}>
   
      <Carcomp 
      namee={"Venus"}
      ind='1'
      content={vc}  
      name={venuss}
      age={mnvus}
      g={" 8.87 m/s²"}
      siz={" 12104(diameter in Km) || 95% the size of Earth"}
      /> 
      </Carousel.Item>
      <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     namee={"Earth"}
     ind='2'
     content={ec}
     age={ea}
     name={earthh}
     g={" 9.807 m/s²"}
     siz={" 12756(diameter in km) || 100% the size of Earth"}
     />
     </Carousel.Item>

     <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     namee={"Mars"}
     ind='3'

     content={mrc}
     name={marss}
     age={jma}
     g={" 3.721 m/s²"}
     siz={" 6779(diameter in km) || 53% the size of Earth"}
     />
     </Carousel.Item>

     <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     content={jc}
     namee={"Jupiter"}
     ind='4'
     g={" 24.79 m/s²"}
     name={jupiterr}
     age={jma}
     siz={" 142800(diameter in km) || 1120% the size of Earth"}
     />
     </Carousel.Item>

     <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     content={sc}
     ind='5'
     st={st}
     namee={"Saturn"}
     name={saturnn}
     age={mnvus}
     
     g={" 10.44 m/s²"}
     siz={" 120660(diameter in km) || 945% the size of Earth"}
     />
     </Carousel.Item>

     <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     content={uc}
     ind='6'
     namee={"Uranus"}
     age={mnvus}
     g={" 8.87 m/s²"}
     name={uranuss}
     siz={" 51118(diameter in km) || 400% the size of Earth"}
     />
     </Carousel.Item>

     <Carousel.Item style={{height:"450px"}}>
     <Carcomp 
     content={nc}
     namee={"Neptune"}
     ind='7'
     g={" 11.15 m/s²"}
     age={mnvus}
     st={stt}
     name={neptunee}
     siz={" 49528(diameter in km) || 388% the size of Earth"}
     />
     </Carousel.Item>

     </Carousel>

     

    </div>
  );
  }
export default Thecar