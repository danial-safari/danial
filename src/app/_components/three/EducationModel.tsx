'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const EducationModel = () => {
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (torusRef.current) {
            torusRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            torusRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[2, 2, 5]} intensity={0.5} />
            <Torus ref={torusRef} args={[1, 0.3, 128, 64]}>
                <MeshDistortMaterial
                    color="#8B5CF6"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                />
            </Torus>
        </>
    );
};

export default EducationModel; 