import React, { Component } from 'react';
import { Circle, Reflector, Box, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';
//import { Reflector } from "three/examples/jsm/objects/Reflector.js";

function Main () {
    const [img1] = useTexture('../assets/valencia_playa-de-las-arenas_888.jpeg');
    console.log(img1);
    return (
        <group>
            {/* <mesh>
                <Plane attach="geometry" />
                <meshStandardMaterial
                        attach="material"
                        map={img1}
                    />
            </mesh> */}

            <Box />
            
            {/* <Circle args={[5, 64]} position={[0, -2, 0]} rotation={[Math.PI/2, 0, 0]} >
                <meshPhongMaterial attach="material" color="#3437eb" side={THREE.DoubleSide}/>
            </Circle> */}
            <Reflector
                blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={0.75} // How much blur mixes with surface roughness
                mixStrength={0.25} // Strength of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
                args={[50, 50]} // PlaneBufferGeometry arguments
                rotation={[-Math.PI * 0.5, 0, 0]}
                mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                minDepthThreshold={0.25}
                maxDepthThreshold={1}
                depthScale={50}
                position={[0, -2, 0]}
            >
                {(Material, props) => (
                <Material metalness={0.5} roughness={0} color={"#3437eb"}{...props} />
                )}
            </Reflector>
        </group>
    );
}

export default Main ;