import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import texture from '../../Data/texture.json';
import Tooltip from '@mui/material/Tooltip';

export default function Controllers({setCurrent}) {
    const planets = texture.planets;
    const handlePrev = () => setCurrent(prev => prev -1 < 0 ? prev : prev - 1);
    const handleNext = () => setCurrent(prev => prev + 1 >=  planets.length? prev : prev + 1);

  return (
     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1">
                <svg width="40" height="32">
                    <polygon points="40,0 0,32 40,32" fill="none" stroke="#335775" strokeWidth="1" />
                </svg>
                <Tooltip title="previous">
                <div className="p-1 px-2 border border-[#335775] backdrop-blur-md rounded-md shadow-md">
                    <button onClick={handlePrev} className="text-white hover:brightness-150">
                        <PlayArrowIcon className="rotate-180" />
                    </button>
                </div>
                </Tooltip>
                <div className="flex items-center gap-2 px-4 py-1.5 border border-[#335775] backdrop-blur-md rounded-md shadow-md">
                    {texture.planets.map((p, index) => {
                        return (
                        <Tooltip key={index} title={p.name}>
                        <img
                            src={p.texture}
                            alt={p.name}
                            className="w-6 h-6 rounded-full object-cover cursor-pointer active:scale-[1.02] hover:scale-[1.1]"
                            onClick={() => setCurrent(index)}
                        />
                        </Tooltip> 
                        )
                    })}
                </div>
                    <Tooltip title="next">
                <div className="py-1 px-2 border border-[#335775] backdrop-blur-md rounded-md shadow-md">
                    <button onClick={handleNext} className="text-white hover:brightness-150">
                        <PlayArrowIcon />
                    </button>
                </div>
                </Tooltip>
                <svg width="40" height="32">
                    <polygon points="0,0 40,32 0,32" fill="none" stroke="#335775" strokeWidth="1" />
                </svg>
            </div>
  )
}
