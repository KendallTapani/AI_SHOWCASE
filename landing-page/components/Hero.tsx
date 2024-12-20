
export default function Hero() {
  return (
    <div className='relative pt-14 w-full '>
      <div
        className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0 '
        aria-hidden='true'
      >
        <div
          className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-amber-400 to-purple-300 opacity-40'
          style={{
            clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
          }}
        />
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
        aria-hidden='true'
      >
        <div
          className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-amber-400 to-purple-300  opacity-50 w-[72.1875rem]'
          style={{
            clipPath: 'ellipse(80% 30% at 80% 50%)',
          }}
        />
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-0 mx-auto sm:max-w-2xl md:max-w-2xl lg:max-w-7xl text-center'>
            <h1 className='text-7xl font-bold text-gray-900 sm:text-6xl dark:text-white'>
              Build a catalog of Books you want to "acquire"
            </h1>
            <p className='mt-15 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white'>
              Use this tool to figure out where to take your Pirating Journey next. Find what books exist. Get quality recommendations based on your existing collection. Toggle searches for Audiobooks, Narrators, Topics, Comics, and much more!
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href="/login"
                className='rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-200 hover:ring-2 hover:ring-yellow-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white'
              >
                Get Started <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
