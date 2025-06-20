import React from 'react'
import PlanetSlider from './PlanetSlider'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export default function Planets() {
    return (
        <div className='min-w-dvw min-h-dvh py-18 px-20 overflow-x-hidden'>
            <span className='bg-gray-100 p-2 rounded-sm text-sm'>Solar System</span>

            <div className='flex items-center justify-between mt-6'>
                <h2 className='flex-1 text-6xl'>The Planets</h2>
                <p className='flex-1 text-sm'>The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed about 4.6 billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc.</p>
            </div>
        <PlanetSlider />
        <div className='relative mt-12 flex items-center w-full bg-gray-100 py-6 px-28 gap-5'>
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-gray-50 border-r-gray-100"></div>
        <div className=''><InfoOutlineIcon /></div>
        <p className='text-sm'>The Sun is a typical star that maintains a balanced equilibrium by the fusion of hydrogen into helium at its core, releasing this energy from its outer photosphere. Astronomers classify it as a G-type main-sequence star.</p>
        </div>
        </div>
    )
}
