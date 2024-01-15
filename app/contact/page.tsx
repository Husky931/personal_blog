import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <>
      <div className="mt-4 text-center">
        Have a question? Drop me a message and i'll get back to you
      </div>
      <div className="container mx-auto p-8">
        {/* <div></div> */}
        <form className="mx-auto w-full max-w-lg">
          {/* <!-- First Row --> */}
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* <!-- Second Row --> */}
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* <!-- Third Row --> */}
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="message"
                rows={5}
              ></textarea>
            </div>
          </div>

          {/* <!-- Fourth Row --> */}
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3 text-center">
              <button
                className="focus:shadow-outline w-full rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-400"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
