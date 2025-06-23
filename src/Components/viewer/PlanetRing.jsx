import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function PlanetRing({ texturePath, transparencyMap }) {
    const ringRef = useRef();
    const ringTexture = useLoader(THREE.TextureLoader, texturePath);
    const alphaMap = useLoader(THREE.TextureLoader, transparencyMap);

    useFrame(() => {
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.002
        }
    })
    return (
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} ref={ringRef}>
            <ringGeometry args={[2.5, 5.1, 64]} />
            <meshStandardMaterial
                map={ringTexture}
                alphaMap={alphaMap}
                transparent={true}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}