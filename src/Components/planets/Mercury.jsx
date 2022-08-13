import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";
import { TextureLoader } from "three";
import ColorMap from "../textures/8kmercury.jpg"
import Mercpecularmap from "../textures/mercurybump.jpg"
 function Mercury() {
  const [colorMap,specularMap] = useLoader(
    TextureLoader,
    [ColorMap,Mercpecularmap]
  );

  const mercRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    mercRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[0.2, 0, 5]} intensity={2.2} />
      <Stars
        radius={300}
        depth={60}
        count={15000}
        factor={7}
        saturation={0}
        fade={true}
      />
    
      <mesh ref={mercRef} position={[0, 0, 3]} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        
        <meshStandardMaterial
        map={colorMap}
          metalness={0.4}
          roughness={0.7}
        />
     { <OrbitControls
          enableZoom={true}
           enablePan={true}
           enableRotate={true}
           zoomSpeed={0.6}
           panSpeed={0.5}
           rotateSpeed={0.4}
         />
    } 
      </mesh>
    </>
  );
}
export default Mercury;