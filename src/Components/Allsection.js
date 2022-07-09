import React from 'react'
import Halftop from './Halftop';
import Nab from './Nab';
import Thecar from './Thecar';
import './Allsection.css';
import Bott from './Bott';
function Allsection() {
  //to the bot add icon  in the middle and  planets around them 
  return (
    <div>
    <section className="top">
    <Nab />
    <Halftop />
    </section>
    <section className='middle'>
    <Thecar />
    </section>
    <section className='bot'>
    <Bott />
    </section>
    </div>

  )
}

export default Allsection