import {Header, Planets, Updates, Subscribe,Footer} from '../Components/Home-Components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <div className="font-[Inter] dark:selection:text-black selection:text-white selection:bg-gray-900 dark:selection:bg-white bg-gray-50 dark:bg-gray-900 dark:text-white text-black overflow-x-hidden">
      <Header />
      <div className='relative w-dvw h-screen bg-[url(/galaxy.webp)] bg-cover bg-center' id='home'>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className='relative z-10 flex flex-col items-start justify-center h-full space-y-4 px-16'>
          <h1 className="font-semibold text-white text-4xl">Explore Our Solar System</h1>
          <p className='text-white text-sm max-w-xl text-start'>
            Embark on an extraordinary journey through space and time. Discover the wonders of our cosmic neighborhood and unravel the mysteries of the universe
          </p>
          <button onClick={()=> window.open('/viewer/earth', '_blank')} className='px-4 py-2.5 bg-[#2662EC] text-white rounded-sm text-sm'>
            Start Journey <ArrowForwardIcon fontSize='small' />
          </button>
        </div>
      </div>
      <Planets/>
      <Updates />
      <Subscribe />
    <Footer />
    </div>
  )
}
