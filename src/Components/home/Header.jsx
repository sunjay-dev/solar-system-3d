import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className='fixed top-0 z-20 left-0 w-full flex justify-evenly items-center bg-white dark:bg-gray-900 px-4 py-3'>
      <div className='text-xl font-semibold text-[#2662EC] dark:text-white'>SolarVerse</div>
      <div className='items-center justify-space space-x-5 hidden md:flex'>
        <a href='#home' className='font-normal'>Home</a>
        <a href='#planets' className='font-normal'>Planets</a>
        <a href='#updates' className='font-normal'>Updates</a>
        <a href='#subscribe' className='font-normal'>Subscribe</a>
      </div>

      <button onClick={() => setMenuOpen(true)} className={`md:hidden ${menuOpen ? 'hidden' : 'block'}`} aria-label="Open Menu"><MenuIcon /></button>
      <button onClick={() => setMenuOpen(false)} className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`} aria-label="Open Menu"><CloseIcon /></button>

      <div className='flex items-center justify-between space-x-4'>
        <div onClick={() => toggleMode()}>
          <button className="hidden dark:block" aria-label="Turn on Light Mode"><LightModeIcon fontSize='small' /></button>
          <button className="dark:hidden block" aria-label="Turn on Dark Mode"><DarkModeIcon fontSize='small' /></button>
        </div>
        <button onClick={() => window.open('/viewer/earth', '_blank')} className='px-3 py-2 bg-[#2662EC] text-white rounded-sm'>SolarVerse 3D</button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full z-20 bg-white dark:bg-gray-900 flex flex-col items-start px-6 py-4 space-y-4 shadow-md">
            <a href='#home' onClick={()=> setMenuOpen(false)} className='font-medium w-full'>Home</a>
            <a href='#planets' onClick={()=> setMenuOpen(false)} className='font-medium w-full'>Planets</a>
            <a href='#updates' onClick={()=> setMenuOpen(false)} className='font-medium w-full'>Updates</a>
            <a href='#subscribe' onClick={()=> setMenuOpen(false)} className='font-medium w-full'>Subscribe</a>
        </div>
      )}
    </div>
  )
}