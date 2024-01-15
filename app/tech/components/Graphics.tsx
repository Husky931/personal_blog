export default function Others() {
  const graphicsTags = [
    'Digital product strategy',
    '3D software experience',
    'Google analytics',
    'Google search console',
    'Google adwords',
    'social media marketing',
  ]

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
            Others
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {graphicsTags.map((tech) => {
            return (
              <div className="mb-2 mr-5 mt-2" key={tech}>
                <div className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  {tech}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
