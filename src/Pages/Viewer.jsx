import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import texture from '../Data/texture.json';
import {PlanetMash, Controllers} from '../Components/Viewer-Components';
import { useParams } from 'react-router-dom';


export default function Viewer() {
  const { planet } = useParams();

  const currentPlanetIndex = texture.planets.findIndex(
    p => p.name.toLowerCase() === planet.toLowerCase()
  );

  const [current, setCurrent] = useState(currentPlanetIndex === -1?  2 : currentPlanetIndex);
  const starTexture = useLoader(THREE.TextureLoader, '/textures/star.jpg');
  return (
    <div className="relative w-dvw h-dvh overflow-hidden bg-gray-900 text-white">
      
      <div className='absolute z-10 h-full w-full inset-0'>

        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls />
          <color attach="background" args={['black']} />
          <primitive attach="background" object={starTexture} />
          <ambientLight intensity={0.3} color={0x8888aa} />
          <directionalLight intensity={1.5} position={[0, 2, 4]} />
          
          <PlanetMash
            colorMapPath={texture.planets[current].texture}
            bumpMapPath={texture.planets[current].bump}
            bumpScale={texture.planets[current].bumpScale}
            normalMapPath={texture.planets[current].normal}
          />

        </Canvas>

        <Controllers setCurrent={setCurrent} />
      </div>
    </div>
  );
}
