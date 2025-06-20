import React from 'react'
import planets from '../Data/planets.json'
export default function Planets() {
    return (
        <div className='min-w-dvw min-h-dvh py-18 px-20'>
            <span className='bg-gray-100 p-2 rounded-sm text-sm'>Solar System</span>

            <div className='flex items-center justify-between mt-6'>
                <h2 className='flex-1 text-6xl'>The Planets</h2>
                <p className='flex-1 text-sm'>The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed about 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.</p>
            </div>
        <div className="overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory mt-14 px-4">
            <div className='mt-14 flex items-center w-max gap-5'>
                {planets.map(planet => {
                    return (
                        <div className='p-6 w-80 bg-gray-100 relative overflow-hidden'>
                            <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white border-r-gray-100"></div>
                            <img src={planet.image} className='absolute -top-22 -right-22 w-62 h-62' />
                            <p className={`text-lg mt-4 ${planet.color}`}>{planet.order}</p>
                            <p className='text-3xl font-light mt-12'>{planet.name}</p>
                            <p className="text-sm text-gray-500 mt-3">{planet.description}</p>
                            <button className="absolute bottom-0 right-0 bg-white text-black p-2 hover:bg-gray-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                                </svg>
                            </button>
                        </div>
                    )
                }
                )}

            </div>
            </div>
        </div>
    )
}
