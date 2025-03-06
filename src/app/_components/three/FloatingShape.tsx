'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
    const shapeRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (shapeRef.current) {
            shapeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
            shapeRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.3) * 0.1;
            shapeRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[2, 2, 5]} intensity={0.5} />
            <Icosahedron ref={shapeRef} args={[1, 1]}>
                <MeshDistortMaterial
                    color="#10B981"
                    attach="material"
                    distort={0.4}
                    speed={3}
                    roughness={0.4}
                    metalness={0.8}
                />
            </Icosahedron>
        </>
    );
};

export default FloatingShape; 