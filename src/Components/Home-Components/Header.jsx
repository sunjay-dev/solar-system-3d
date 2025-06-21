import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className='fixed top-0 z-20 left-0 w-full flex justify-evenly items-center bg-white dark:bg-gray-900 px-4 py-3'>
    <div className='text-xl font-semibold text-[#2662EC] dark:text-white'>SolarVerse</div>
    <div className='items-center justify-space space-x-5 hidden md:flex'>
    <a href='#home' className='font-normal'>Home</a>
    <a href='#planets' className='font-normal'>Planets</a>
    <a href='#updates'className='font-normal'>Updates</a>
    <a href='#subscribe' className='font-normal'>subscribe</a>
    </div>
    <button className='md:hidden'><MenuIcon/></button>
    <div className='flex items-center justify-between space-x-4'>
    <div onClick={() => toggleMode()}>
    <button className="hidden dark:block"><LightModeIcon fontSize='small' /></button>
    <button className="dark:hidden block"><DarkModeIcon fontSize='small'  /></button>
    </div>
    <button className='px-3 py-2 bg-[#2662EC] text-white rounded-sm'>Contact Us</button>
    </div>
    </div>
  )
}