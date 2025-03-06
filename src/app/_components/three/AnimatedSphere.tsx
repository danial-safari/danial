'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Sphere ref={sphereRef} args={[1, 100, 100]}>
                <MeshDistortMaterial
                    color="#3B82F6"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                />
            </Sphere>
        </>
    );
};

export default AnimatedSphere; 