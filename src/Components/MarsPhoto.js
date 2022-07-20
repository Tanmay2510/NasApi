import React from 'react'
import "./MarsPhoto.css"
import Rocket from '../icon/rocket-solid';

import spirit from "../images/spiritRover.jpg"
import opp from "../images/opportunity.jpg"
import cur from "../images/Curiosity.jpg"
import per from "../images/persev.jpg"
import Marscard from './Marscard';
import { useNavigate } from 'react-router-dom';
function MarsPhoto() {
  const navigate = useNavigate();
  const nn = () =>{
    navigate("/");
  }
  
    
  return (
    <section className="forbg">
    
    <p className="thep" onClick={nn}>Mars Photos {<Rocket />}</p>
    <hr  className="h"></hr>

<div className="ath">
    
  <Marscard 
  id="c"
  imgg={cur}
  alt="Curiosity"
  but="Curiosity"
  titl="Curiosity Rover"
  />
  <Marscard 
  id="s"
  imgg={spirit}
  alt="Spirit "
  but="Spirit"
  titl="Spirit Rover"
  />
  <Marscard 
  id="o"
  imgg={opp}
  alt="Opportunity"
  but="Opportunity"
  titl="Opportunity Rover"
  />
  <Marscard 
  id="p"
  imgg={per}
  alt="Perseverance"
  but="Perseverance"
  titl="Perseverance Rover"
  />
 
</div>
</section>
    
    
  )
}

export default MarsPhoto

