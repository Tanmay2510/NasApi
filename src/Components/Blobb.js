import React from 'react'
import KUTE from "kute.js"

function Blobb() {
    const tween = KUTE.fromTo(
  '#blob1',
  {path:'#blob1'},
  {path:'#blob2'},
  {repeat:999,duration:3000,yoyo:true}
)
tween.start();
  return (
    <svg 
        id="visual" 
        viewBox="0 0 960 300" 
        width="960" 
        height="300"
         xmlns="http://www.w3.org/2000/svg" 
         xmlnsXlink="http://www.w3.org/1999/xlink" 
         version="1.1">
         <g transform="translate(477.02463565249354 147.70027574405017)">
         <path id ="blob1"d="M80.6 -74.8C105.6 -55.6 127.8 -27.8 122.7 -5.1C117.7 17.7 85.4 35.4 60.4 57.5C35.4 79.7 17.7 106.3 -1.6 108C-21 109.6 -42 86.3 -65.5 64.1C-89 42 -115 21 -117.3 -2.4C-119.7 -25.7 -98.4 -51.4 -74.9 -70.5C-51.4 -89.7 -25.7 -102.4 1.1 -103.4C27.8 -104.5 55.6 -94 80.6 -74.8" fill="#b331b7">
         </path>
         </g>

         <g transform="translate(460.55361995939694 135.2188221905476)" style="visibility : hidden">
         <path id="blob2" d="M80.6 -68.1C105.6 -55.6 127.8 -27.8 126.8 -1.1C125.7 25.7 101.4 51.4 76.4 74C51.4 96.7 25.7 116.4 2.8 113.5C-20 110.7 -40.1 85.4 -54.1 62.7C-68.1 40.1 -76 20 -82.2 -6.1C-88.3 -32.3 -92.6 -64.6 -78.6 -77.1C-64.6 -89.6 -32.3 -82.3 -2.2 -80.1C27.8 -77.8 55.6 -80.6 80.6 -68.1" fill="#b331b7">
         </path>
         </g>
         </svg>
  )
}

export default Blobb