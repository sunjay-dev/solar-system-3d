import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
export default function Subscribe() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 mt-16" id='subscribe'>
  <div className="max-w-3xl mx-auto text-center space-y-2">
    <h2 className="text-3xl flex gap-2 items-center justify-center font-semibold text-gray-800 dark:text-white">
    <RocketLaunchIcon fontSize='large' /> Stay in the Cosmic Loop
    </h2>
    <p className="mt-2 text-sm text-gray-600 px-8 dark:text-gray-400">
      Subscribe to receive the latest space news, discoveries, and updates.
    </p>

    <form className="mt-6 flex flex-col sm:flex-row items-center px-8 justify-center gap-3 space-y-1">
      <input type="email" placeholder="Enter your email" required
        className="w-full sm:w-auto px-8 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-[#1e1e1e] dark:text-white" />
      <button type="submit" className="px-5 py-2 w-full sm:w-auto bg-[#2662EC] text-white rounded-md hover:bg-[#1c4fb7] transition">
        Subscribe
      </button>
    </form>

    <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
      No spam. Unsubscribe anytime.
    </p>
  </div>
</section>
  )
}
