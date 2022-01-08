import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Main from './components/Main';
import {Canvas} from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'

function App() {
  let color = "Yellow";
  return (
      <div className="App">
        <Canvas 
        fov={75} near={0.1} far={1000} position={[0, 0, 40]} 
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
          scene.background = new THREE.Color(color)
        }}>
          <Main />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
        </Canvas>
      </div>
    
  );
}

export default App;
