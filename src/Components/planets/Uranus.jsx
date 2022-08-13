import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import uranMap from "../textures/uranusmap.jpg"
import urringmap from "../textures/uranusringcolour.jpg"
 function Uranus(props) {
  const [colorMap,ringMap ] = useLoader(
    TextureLoader,
    [uranMap  , urringmap]
  );

  const urRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    urRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.z = elapsedTime / 6;

  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[0.2, 0, 5]} intensity={0.9} />
      <Stars
        radius={300}
        depth={60}
        count={15000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh rotation-x={-0.3} rotation-y={-0.2}>
      <mesh
      position={[0, 0 , 3]}
      ref={cloudsRef}>
         <ringBufferGeometry args={[1.2, 1.6, 33]} />
         <meshPhongMaterial
          map={ringMap}
         
          opacity={1}
          transparent={true}
        />
   </mesh>
      
      <mesh ref={urRef} position={[0, 0, 3]} >
        <sphereGeometry args={[1, 32, 32]} />
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
      </mesh>

    </>
  );
}
export default Uranus;