import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import texture from '../Data/texture.json';
import { PlanetMash, Controllers } from '../Components/Viewer-Components';
import { useParams } from 'react-router-dom';
import ResponsiveCamera from '../Hooks/ResponsiveCamera';

export default function Viewer() {
  const { planet } = useParams();

  const currentPlanetIndex = texture.planets.findIndex(
    p => p.name.toLowerCase() === planet.toLowerCase()
  );

  const [current, setCurrent] = useState(currentPlanetIndex === -1 ? 2 : currentPlanetIndex);
  const starTexture = useLoader(THREE.TextureLoader, '/textures/star.jpg');
  const [isNotMobile] = useState(() => window.innerWidth > 640);

  return (
    <div className="relative w-dvw h-dvh overflow-hidden bg-gray-900 text-white">
      <div onClick={()=> window.location.href = '/'} className='top-6 left-6 z-30 absolute cursor-pointer'>
      <img src='/logo-white.webp' alt="logo" className='h-12 w-auto max-w-[200px]' />
      </div>
      <div className='absolute z-10 h-full w-full inset-0'>
        <Canvas>
          <ResponsiveCamera />
          <OrbitControls enablePan={isNotMobile} 
          enableZoom={true} 
          minDistance={isNotMobile? 3: 6} 
          maxDistance={isNotMobile? 50: 30} />
          <color attach="background" args={['black']} />
          <ambientLight intensity={0.3} color={0x8888aa} />
          <directionalLight intensity={1.5} position={[0, 2, 4]} />

          <mesh>
            <sphereGeometry args={[500, 64, 64]} />
            <meshBasicMaterial map={starTexture} side={THREE.BackSide} />
          </mesh>

          <PlanetMash
            colorMapPath={texture.planets[current].texture}
            bumpMapPath={texture.planets[current].bump}
            bumpScale={texture.planets[current].bumpScale}
            normalMapPath={texture.planets[current].normal}
          />
        </Canvas>
        <Controllers setCurrent={setCurrent} current={current} />
      </div>
    </div>
  );
}
