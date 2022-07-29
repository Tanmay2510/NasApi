import React from 'react'
import Halftop from './Halftop';
import Nab from './Nab';
import Thecar from './Thecar';
import './Allsection.css';
import Bott from './Bott';
import {motion} from 'framer-motion'
function Allsection() {
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
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
    </motion.div>

  )
}

export default Allsection