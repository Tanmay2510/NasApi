import React from 'react'
import Halftop from './Halftop';
import Nab from './Nab';
import Thecar from './Thecar';
import './Allsection.css';
function Allsection() {
  return (
    <div>
    <section className="top">
    <Nab />
    <Halftop />
    </section>
    <section className='middle'>
    <Thecar />
    </section>
    </div>

  )
}

export default Allsection