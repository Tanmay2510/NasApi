import React from 'react'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  Earth  from "./Earth";
import Mars from "./Mars";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Jupiter  from './Jupiter';
import Saturn  from './Saturn';
import Neptune from './Neptune'

import { browse } from './Carcomp';
const CanvasContainer = styled.div`
width:50%;
`;


function Model() {
  console.log(browse)
  return (
    <CanvasContainer>
    <Canvas>
      <Suspense fallback={null}>
        <Neptune />
      </Suspense>
    </Canvas>
  </CanvasContainer>
  )
}

export default Model