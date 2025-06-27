import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import texture from '../Data/texture.json';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Loading ,PlanetMash, Controllers, PlanetRing, Information } from '../Components/viewer';
import ResponsiveCamera from '../Hooks/ResponsiveCamera';
import { OrbitControls } from '@react-three/drei';
import { useParams } from 'react-router-dom';

export default function Viewer() {
  const { planet } = useParams();

  const currentPlanetIndex = texture.planets.findIndex(
    p => p.name.toLowerCase() === planet.toLowerCase()
  );

  const [current, setCurrent] = useState(currentPlanetIndex === -1 ? 2 : currentPlanetIndex);
  const [loading, setLoading] = useState(true);
  const starTexture = useLoader(THREE.TextureLoader, '/textures/star.webp');
  const [isNotMobile] = useState(() => window.innerWidth > 640);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <Helmet>
        <title>SolarVerse | {planet}</title>
        <meta name="description" content={`Learn about ${planet} in SolarVerse, a 3D space viewer.`} />
      </Helmet>
      {loading && <Loading /> }
      <div style={{ visibility: loading ? 'hidden' : 'visible' }} className="relative w-dvw h-dvh overflow-hidden bg-gray-900 text-white">
        <div onClick={() => window.location.href = '/'} className={`top-6 left-6 z-30 absolute cursor-pointer ${showInfo ? 'hidden' : ''}`}>
          <img src='/logo-white.webp' alt="logo" height={48} className='h-12 w-auto max-w-[200px]' />
        </div>
        <div className='absolute z-10 h-full w-full inset-0'>

          <Canvas>
            <ResponsiveCamera />
            <OrbitControls enablePan={isNotMobile}
              enableZoom={true}
              minDistance={isNotMobile ? 3 : 4}
              maxDistance={isNotMobile ? 50 : 30} />
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
              setLoading={setLoading}
            />
            {texture.planets[current].hasRing &&
              <PlanetRing
                texturePath={texture.planets[current].ringTexture}
                transparencyMap={texture.planets[current].ringAlpha}
              />
            }
          </Canvas>

          <Information currentPlanet={texture.planets[current]} showInfo={showInfo} setShowInfo={setShowInfo} />

          <Controllers setCurrent={setCurrent} current={current} isNotMobile={isNotMobile} />
        </div>
      </div>
    </>
  );
}