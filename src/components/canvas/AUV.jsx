import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const AUV = ({ isMobile, scale }) => {
  const auv = useGLTF("./AUV/scene.gltf");
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Continuous rotation
    }
  });

  const defaultScale = isMobile ? 2.7 : 8.75;
  const finalScale = scale || defaultScale;

  return (
    <primitive
      object={auv.scene}
      scale={finalScale}
      position={isMobile ? [0, -3, -2.2] : [0, -1.5, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const AUVCanvas = ({ scale }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          rotateSpeed={0.5}
        />
        
        {/* Improved lighting setup */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[20, 30, -10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[0, 20, 0]} intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        
        <AUV isMobile={isMobile} scale={scale} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AUVCanvas;