import React from 'react'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  Earth  from "./Earth";
import Mars from "./Mars";
const CanvasContainer = styled.div`
width:50%;
`;


function Model() {
  return (
    <CanvasContainer>
    <Canvas>
      <Suspense fallback={null}>
        <Earth
        />
      </Suspense>
    </Canvas>
  </CanvasContainer>
  )
}

export default Model