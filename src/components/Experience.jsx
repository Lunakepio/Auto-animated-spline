import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./Tour_paris_promenade";
import React, { useState, useEffect, useRef } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useSpline } from "./useSpline";

export const Experience = () => {
  const {points, loading, error} = useSpline('./CurvedPath.json');
  const cam = useRef();
  const lookAtTarget = useRef();
  const [currentPoint, setCurrentPoint] = useState(0);
  const speedFactor = 0.03;
  

  useFrame(()=>{
    const camera = cam.current;
    if (currentPoint < points.length - 1) {
      camera.position.lerp(points[currentPoint], speedFactor);
      camera.lookAt(points[currentPoint+1]);

      if (camera.position.distanceTo(points[currentPoint]) < 0.1) {
        setCurrentPoint(currentPoint + 1);
      }
    } else {
      setCurrentPoint(0);
    }
  });


  return (
    <>
    <Model/>
    {/* <OrbitControls/> */}
    <PerspectiveCamera ref={cam} makeDefault position={[0,2,0]} />
    <Environment preset="apartment"/>
    </>
  );
};
