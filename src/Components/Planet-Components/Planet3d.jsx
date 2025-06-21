import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import PlanetMash from './planetMash';
import texture from '../../Data/texture.json';
import Controllers from './Controllers';

export default function Planet3d() {
    const starTexture  = useLoader(THREE.TextureLoader, '/textures/star.jpg');
    const [current, setCurrent] = useState(2);
    const currentPlanet = texture.planets[current];

    return (
        <div className='absolute z-10 h-full w-full inset-0'>
            {/* 3D Canvas */}
            <Canvas camera={{ position: [0, 0, 5] }}>
                <OrbitControls />
                <color attach="background" args={['black']} />
                <primitive attach="background" object={starTexture} />
                <ambientLight intensity={1} />
                <directionalLight position={[0, 2, 5]} />
                <PlanetMash
                    colorMapPath={currentPlanet.texture}
                    bumpMapPath={currentPlanet.bump}
                    bumpScale={currentPlanet.bumpScale}
                    normalMapPath= {currentPlanet.normal}
                />
            </Canvas>

            <Controllers setCurrent={setCurrent} currentPlanet={currentPlanet} />
        </div>
    );
}
