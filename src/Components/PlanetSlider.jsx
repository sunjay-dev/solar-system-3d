import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import planets from '../Data/planets.json';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function PlanetSlider() {
    const scrollRef = useRef();
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const el = scrollRef.current;
        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        const progress = scrollLeft / maxScrollLeft;
        setScrollProgress(progress);
    };

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (scrollEl) {
            scrollEl.addEventListener("scroll", handleScroll);
            return () => scrollEl.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <div className="overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory mt-14 px-4" ref={scrollRef}>
                <div className='mt-14 flex items-center w-max gap-5'>
                    {planets.map(planet => {
                        return (
                            <div key={planet.id} className='p-6 w-80 bg-gray-100 dark:bg-[#212528] relative overflow-hidden'>
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-gray-50 border-r-gray-100 dark:border-t-gray-900 dark:border-r-[#212528]"></div>
                                <img src={planet.image} className='absolute -top-24 -right-22 w-66 h-66' />
                                <p className={`text-lg mt-4 ${planet.color}`}>{planet.order}</p>
                                <p className='text-3xl font-light mt-20'>{planet.name}</p>
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

            <div className="flex items-center justify-between w-full mt-12 px-4">
                <div className="relative flex-1 h-[2px] bg-gray-300 max-w-xl rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gray-500 rounded-full"
                        style={{ width: `${scrollProgress * 100}%` }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    />
                </div>

                {/* Arrows */}
                <div className="space-x-3">
                    <button
                        onClick={() => {
                            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
                        }}
                        className="hover:text-[#2662EC] transition"
                    >
                        <KeyboardArrowLeftIcon fontSize="medium" />
                    </button>
                    <button
                        onClick={() => {
                            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                        }}
                        className="hover:text-[#2662EC] transition"
                    >
                        <KeyboardArrowRightIcon fontSize="medium" />
                    </button>
                </div>
            </div>

        </>
    )
}
