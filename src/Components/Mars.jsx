import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import Marsmap from "./textures/8k_mars.jpg"
 function Earth(props) {
  const [normalMap] = useLoader(
    TextureLoader,
    [Marsmap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
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
      
      <mesh ref={earthRef} position={[0, 0, 3]} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          normalMap={normalMap}
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
export default Earth;