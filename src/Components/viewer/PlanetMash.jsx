/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState, useMemo } from 'react'
import { useCursor } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function PlanetMash({ colorMapPath, bumpMapPath, bumpScale, normalMapPath }) {
    const planetRef = useRef();

    const [hovered, setHovered] = useState(false);
    useCursor(hovered);
    
    const colorMap = useMemo(()=> useLoader(TextureLoader, colorMapPath), [colorMapPath]);
    const bumpMap = useMemo(()=> bumpMapPath? useLoader(TextureLoader, bumpMapPath) : null, [bumpMapPath])
    const normalMap = useMemo(()=> normalMapPath? useLoader(TextureLoader, normalMapPath) : null, [normalMapPath])

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.002
        }
    })
    return (
        <mesh ref={planetRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
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