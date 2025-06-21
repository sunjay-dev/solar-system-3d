/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useMemo } from 'react';

export default function PlanetMash({ colorMapPath, bumpMapPath, bumpScale, normalMapPath }) {
    const planetRef = useRef();

    const colorMap = useMemo(() => {
        return useLoader(TextureLoader, colorMapPath)
    }, [colorMapPath])

    const bumpMap = useMemo(() => {
        return bumpMapPath ? useLoader(TextureLoader, bumpMapPath) : null;
    }, [bumpMapPath])

    const normalMap = useMemo(() => {
        return normalMapPath ? useLoader(TextureLoader, normalMapPath) : null;
    }, [normalMapPath])

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.002
        }
    })
    return (
        <mesh ref={planetRef}>
            <sphereGeometry args={[2.2, 64, 64]} />
            <meshStandardMaterial
                map={colorMap}
                bumpMap={bumpMap}
                bumpScale={bumpScale || 0.05}
                normalMap={normalMap}
                metalness={0.1}
                roughness={0.3}
            />
        </mesh>
    )
}
