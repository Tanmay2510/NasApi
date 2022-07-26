import React from 'react'
import AnotherNav from "./AnotherNav.js"
import "./Nav.css";
import Bluebub  from "../icon/Bluebub";
import  Orangebub from "../icon/Orangebub";

import Redbub from "../icon/Redbub";
import Greenbub from "../icon/Greenbub";

function Nav() {

  return (
    <div>
    <AnotherNav />
    
    <div className='bggg' >
     {<Bluebub />}
     {<Redbub />}

     {<Orangebub />}

     
    </div>
    {<Greenbub />}
    
    </div>
  )
}

export default Nav;