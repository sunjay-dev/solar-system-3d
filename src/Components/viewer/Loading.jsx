export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center bg-black text-white">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="text-lg tracking-wide font-medium text-white animate-pulse">
                Loading <span className="text-[#2662EC]">SolarVerse</span>...
            </p>
        </div>
    )
}