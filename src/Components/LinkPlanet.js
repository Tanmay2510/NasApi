import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnotherNav from './AnotherNav'
import "./LinkPlanet.css"

function LinkPlanet() {
  const apod = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
  const [data,setData] = useState({});
  useEffect(() =>{
    axios.get(apod).then((response) => {
        setData(response.data);
    })
  },[])
  return (
    <div>
        <AnotherNav />

        <div className="forfont">
        <div className="theh">
        <h1>Name: {data ? data.title :null}</h1>
        </div>
        <div className="contp">
        <p> {data ? data.explanation : null }</p>
        </div>  
     <hr  className="hhh"></hr>

        <div >
        <img className="timg" src = {data ? data.hdurl : null } alt="Theimage"></img>
        </div>
        <div className="belline">
        <p className="belp">Image Date:{data ? data.date :null}</p>
      
        <p>Image Copyright: ©   {data.copyright ?data.copyright:"NASA"}</p>
         
        </div>
        </div>

    </div>
  )
}

export default LinkPlanet