import React, {Suspense, useRef} from "react";
import {CssBaseline} from "@mui/material";
import {CameraShake, Environment, Loader, OrbitControls} from "@react-three/drei";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import Beaker from "./components/3d/Beaker";
import './App.scss';
import * as THREE from "three";

function Rig({ children }: any) {
  const ref = useRef(null);
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
  })
  return <group ref={ref}>{children}</group>
}

function App() {
  return (
    <div>
      <CssBaseline />

      <>
        <div>
          <Loader />

          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15] }} gl={{ alpha: false }}>
            <color attach="background" args={['white']} />
            <ambientLight />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
            <Suspense fallback={null}>
              <Environment preset="apartment" background={false} />
              <Rig>
                <Beaker />
              </Rig>

            </Suspense>
            <CameraShake yawFrequency={0.1} pitchFrequency={0.1} rollFrequency={0} />
          </Canvas>
        </div>
      </>

    </div>
  );
}

export default App;
