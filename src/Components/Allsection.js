import React from 'react'
import Halftop from './Halftop';
import Nab from './Nab';

function Allsection() {
  return (
    <div>
    <section className="top">
    <Nab />
    <Halftop />
    </section>
    <section className='middle'>
    </section>
    </div>

  )
}

export default Allsection