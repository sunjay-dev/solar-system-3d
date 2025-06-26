import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Information({ currentPlanet, showInfo, setShowInfo }) {

    return (
        <>
            <button aria-label="open Information section" onClick={() => setShowInfo(true)}
                className="fixed top-28 left-0 z-40 bg-white hover:bg-gray-100 px-1 py-4 rounded-r-md" >
                <MenuIcon className="text-black transform rotate-90" fontSize="medium" />
            </button>

            {showInfo && (
                <div className="fixed top-0 left-0 z-50 h-dvh w-[320px] bg-white text-black  transition-transform duration-300 overflow-y-auto">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                        <h2 className="text-xl font-semibold tracking-wide">{currentPlanet.name}</h2>
                        <button aria-label='close Information section' onClick={() => setShowInfo(false)} className="hover:scale-[1.1] active:scale-[1.1]">
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="w-full px-4 pt-4">
                        <img src={currentPlanet.texture} alt={currentPlanet.name}
                            className="rounded-lg border border-gray-300" />
                    </div>

                    <p className="px-4 pt-3 text-sm italic text-gray-500"> {currentPlanet.tagline}</p>

                    <div className="mt-4 px-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <p className="font-medium text-gray-600">Radius</p>
                            <p>{currentPlanet.radius}  km</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Moons</p>
                            <p>{currentPlanet.moons}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Orbital Period</p>
                            <p>{currentPlanet.orbit}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Ring System</p>
                            <p>{currentPlanet.hasRing ? "Yes" : "No"}</p>
                        </div>
                    </div>

                    <div className="mt-5 px-4 pb-6">
                        <h3 className="text-md font-semibold mb-2">Description</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {currentPlanet.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
