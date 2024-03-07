import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { Experience } from "./Experience";

const degreesLimit = 15;
const radiansLimit = degToRad(degreesLimit);
const neutralAzimuth = 0;
const neutralPolar = Math.PI / 2;

// Calculate min and max angles
const minAzimuthAngle = neutralAzimuth - radiansLimit;
const maxAzimuthAngle = neutralAzimuth + radiansLimit;
const minPolarAngle = neutralPolar - radiansLimit;
const maxPolarAngle = neutralPolar + radiansLimit;

export const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 7], fov: 30 }}>
      <color attach="background" args={["#141622"]} />
      <Suspense fallback={null}>
        <Preload all />
        <Experience />
      </Suspense>
      <OrbitControls
        minAzimuthAngle={minAzimuthAngle}
        maxAzimuthAngle={maxAzimuthAngle}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        enableDamping
        dampingFactor={0.05}
        minDistance={2} // Minimum zoom distance
        maxDistance={25} // Maximum zoom distance
      />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
};
