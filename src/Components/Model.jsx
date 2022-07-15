import React from 'react'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  Planets  from "./Planets";
const CanvasContainer = styled.div`
  width: 50%;
  height: 170%;
  
`;


function Model() {
  return (
    <CanvasContainer>
    <Canvas>
      <Suspense fallback={null}>
        <Planets />
      </Suspense>
    </Canvas>
  </CanvasContainer>
  )
}

export default Model