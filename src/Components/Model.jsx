import React from 'react'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  Earth  from "./planets/Earth";
import Mars from "./planets/Mars";
import Mercury from "./planets/Mercury";
import Venus from "./planets/Venus";
import Jupiter  from './planets/Jupiter';
import Saturn  from './planets/Saturn';
import Neptune from './planets/Neptune'
import Uranus from './planets/Uranus'
import { browse } from './Carcomp';
const CanvasContainer = styled.div`
width:50vw;
`;


function Model() {
  var Planets;
  console.log(browse)
  if(browse==="/Earth"){
    Planets=<Earth />
  }else if(browse==="/Mercury"){
    Planets=<Mercury />
  }else if(browse==="/Venus"){
    Planets=<Venus />
  }else if(browse==="/Mars"){
    Planets=<Mars />
  }else if(browse==="/Jupiter"){
    Planets=<Jupiter />
  }else if(browse==="/Saturn"){
    Planets=<Saturn />
  }else if(browse==="/Uranus"){
    Planets=<Uranus />
  }else if(browse==="/Neptune"){
    Planets=<Neptune />
  }
  return (
    <CanvasContainer>
    <Canvas>
      <Suspense fallback={null}>
        {Planets}
      </Suspense>
    </Canvas>
  </CanvasContainer>
  )
}

export default Model