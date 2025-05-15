// import experiments from "@/experiments";

import cn from "@/utilities/cn";

export default function RootPage() {
  return (
    <>
      <main className={cn("px-6 lg:px-8 pt-6")}>
        <div
          aria-hidden="true"
          className={cn("absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80")}
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-black dark:text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-7xl">
              Welcome @ Generative Music Experiments
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Generative Music Experiments is a collection of interactive, browser-based audio experiments exploring algorithmic composition and procedural sound generation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-32rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-64rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>

      {/* <h1 className={cn("text-3xl font-bold text-center mt-10 mb-8")}>Experiments</h1>
      <p className={cn("text-center text-gray-500 mb-8")}>
        Explore our collection of generative music experiments. Click on any experiment to view and interact with it.
      </p>
      <div className={cn("flex justify-center mb-10 gap-4 pb-14")}>
        {
          experiments.map((experiment) => (
            <div key={experiment.id} className={cn("flex flex-col gap-2 px-3 py-1.5 rounded-md cursor-pointer bg-gray-200 dark:bg-gray-800 font-semibold text-black dark:text-white shadow-inner shadow-white/10")}>
              <h2 className={cn("text-xl font-bold")}>{experiment.name}</h2>
              <p>{experiment.description}</p>
              <a href={`experiments/${experiment.id}`} className={cn("text-blue-500 underline")}>
                View Experiment
              </a>
            </div>
          ))
        }
      </div> */}
    </>
  )
}