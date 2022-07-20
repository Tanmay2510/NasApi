import React from 'react'
import { roverName } from './Marscard'
import Therover from './Therover';
import cu from "../images/Curiosity.jpg"
import op from "../images/opportunity.jpg"
import sr from "../images/spiritRover.jpg"
import pr from "../images/persev.jpg"
function Rover() {
    var obj = {};
    if(roverName==="/curiosity"){
         obj={
            nam:"Curiosity",
            imag: cu,
            type:"Mars Rover",
            op:"Nasa",
            st: "Active",
            ld:"26 November 2011, 15:02 UTC",
            goal:"As established by the Mars Exploration Program, the main scientific goals of the MSL mission are to help determine whether Mars could ever have supported life, as well as determining the role of water, and to study the climate and geology of Mars.The mission results will also help prepare for human exploration"
        }
    }else if(roverName==="/opportunity"){
         obj={
            nam:"Opportunity",
            imag:op,
            lc:"June 10, 2018",
            type:"Mars Rover",
            op:"Nasa",
            st:"Not active",
            ld:"July 8, 2003, 03:18 UTC",
            goal:"Search for and characterize a variety of rocks and regolith that hold clues to past water activity. In particular, samples sought include those that have minerals deposited by water-related processes such as precipitation, evaporation, sedimentary cementation or hydrothermal activity."


        }
    }else if(roverName==="/spirit"){
         obj={
            nam:"Spirit",
            imag:sr,
            lc:"March 22, 2010 (sol 2208)",
            type:"Rover",
            op:"Nasa",
            st:"Not active",
            ld:"June 10, 2003, 1:58:47 p.m. EDT",
            goal:`Search for and characterize a variety of rocks and soils that hold clues to past water activity. In particular, samples sought will include those that have minerals deposited by water-related processes such as precipitation, evaporation, sedimentary cementation or hydrothermal activity.`


        }
    }else if(roverName==="/perseverance"){
        obj={
           nam:"Perseverance",
           imag:pr,
           type:"Mars Rover",
           op:"Nasa",
           st:"Active",
           ld:"30 July 2020, 11:50 UTC",
           goal:`Looking for habitability: identify past environments that were capable of supporting microbial life.          Seeking biosignatures: seek signs of possible past microbial life in those habitable environments, particularly in specific rock types known to preserve signs over time. Caching samples: collect core rock and regolith ("soil") samples and store them on the Martian surface. Preparing for humans: test oxygen production from the Martian atmosphere.`

       }
   }

  return (
    <div>
    <Therover 
    nam = {obj.nam}
    imm = {obj.imag}
    l={obj.lc}
    t={obj.type}
    o={obj.op}
    s={obj.st}
    d={obj.ld}
    g={obj.goal}
    />
    </div>
  )
}

export default Rover