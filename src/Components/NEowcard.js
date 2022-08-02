import React from 'react'
import "./NEowcard.css"
import nm1 from "./neowimages/neowim1.png"

function NEowcard() {
  return (
    <div>
    <div className = "container">
    <div className = "card">
      <div className = "image">
        <img src =  {nm1}  ></img>
      </div>
      <div className = "content">
        <h3>This is content</h3>
        <p>Dcontent.</p>
      </div>
    </div>    
  </div>
    
    
    
    </div>
  )
}

export default NEowcard