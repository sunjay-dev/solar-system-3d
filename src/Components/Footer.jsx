export default function Footer() {
  return (
    <footer className="my-4">
  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-gray-700 space-y-4 md:space-y-0">
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-[#2662EC]">SolarVerse</h2>
      <p className="text-sm text-gray-500 max-w-sm"> Explore the wonders of our solar system and beyond. Space is just a scroll away.</p>
    </div>

    <div className="flex space-x-5 text-sm">
      <a href="#home" className="hover:text-[#2662EC]">Home</a>
      <a href="#planets" className="hover:text-[#2662EC]">Planets</a>
      <a href="#news" className="hover:text-[#2662EC]">News</a>
      <a href="mailto:your@email.com" className="hover:text-[#2662EC]">Contact</a>
    </div>
  </div>

  <div className="text-center text-xs text-gray-400 py-4">
    &copy; {new Date().getFullYear()} SolarVerse. All rights reserved.
  </div>
</footer>

  )
}