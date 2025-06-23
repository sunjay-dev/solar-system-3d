export default function Footer() {
  return (
    <footer className="py-4 space-y-3 dark:text-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-gray-700 dark:text-white space-y-6 md:space-y-0">
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-[#2662EC] selection:bg-[#2662EC] dark:text-white">SolarVerse</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm"> Explore the wonders of our solar system and beyond. Space is just a scroll away.</p>
    </div>

    <div className="flex space-x-5 text-sm">
      <a href="#home" className="hover:text-[#2662EC]">Home</a>
      <a href="#planets" className="hover:text-[#2662EC]">Planets</a>
      <a href="#news" className="hover:text-[#2662EC]">News</a>
      <a href="#subscribe" className="hover:text-[#2662EC]">subscribe</a>
      <a href="mailto:your@email.com" className="hover:text-[#2662EC]">Contact</a>
    </div>
  </div>

  <div className="text-center text-xs text-gray-400 py-4">
    &copy; {new Date().getFullYear()} SolarVerse. All rights reserved.
  </div>
</footer>

  )
}