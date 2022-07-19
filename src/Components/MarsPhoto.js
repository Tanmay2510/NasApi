import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./MarsPhoto.css"
import Rocket from '../icon/rocket-solid';

import spirit from "../images/spiritRover.webp"
import opp from "../images/opportunity.jpg"
import cur from "../images/Curiosity.jpg"
import Marscard from './Marscard';
function MarsPhoto() {
    // const ur = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${searchDate}&api_key=${process.env.REACT_APP_API_KEY}`;
    // const [data,setdata] = useState({});
    // useEffect(() => {
    //     axios.get(ur).then((response) => {
    //         setdata(response.data);
    //     })
    // },[])
    
  return (
    <section className="forbg">
    
    <p className="thep">Mars Photos {<Rocket />}</p>
    <hr  className="h"></hr>

<div className="ath">
    
  <Marscard 
  imgg={cur}
  alt="Curiosity"
  but="Curiosity"
  titl="Curiosity Rover"
  />
  <Marscard 
  imgg={spirit}
  alt="Spirit "
  but="Spirit"
  titl="Spirit Rover"
  />
  <Marscard 
  imgg={opp}
  alt="Opportunity"
  but="Opportunity"
  titl="Opportunity Rover"
  />
 
</div>
</section>
    
    
  )
}

export default MarsPhoto

