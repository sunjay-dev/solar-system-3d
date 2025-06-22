import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function ResponsiveCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const handleCameraResize = () => window.innerWidth < 640 ? camera.position.set(0, 0, 7) : camera.position.set(0, 0, 5.5);

    handleCameraResize(); 
    window.addEventListener('resize', handleCameraResize);

    return () => window.removeEventListener('resize', handleCameraResize);
  }, [camera]);

  return null;
}