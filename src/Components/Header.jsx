import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Header() {
  return (
    <div className='fixed top-0 z-20 left-0 w-full flex justify-evenly items-center bg-white px-4 py-3'>
    <div className='text-xl font-semibold text-[#2662EC] dark:text-white'>SolarVerse</div>
    <div className='flex items-center justify-space space-x-5'>
    <a className='font-normal'>Home</a>
    <a className='font-normal'>Planets</a>
    <a className='font-normal'>Exploration</a>
    <a className='font-normal'>Learn</a>
    </div>
    <div className='flex items-center justify-between space-x-4'>
    <div>
    <button className="hidden dark:block"><LightModeIcon fontSize='small' /></button>
    <button className="dark:hidden block"><DarkModeIcon fontSize='small'  /></button>
    </div>
    <button className='px-3 py-2 bg-[#2662EC] text-white rounded-sm'>Contact Us</button>
    </div>
    </div>
  )
}
