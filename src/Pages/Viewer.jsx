import Planet3d from '../Components/Planet-Components/Planet3d'
export default function Viewer() {
  
  return (
    <div className="relative w-dvw h-dvh overflow-hidden bg-gray-900 text-white">
    <Planet3d />  
    </div>
  );
}
