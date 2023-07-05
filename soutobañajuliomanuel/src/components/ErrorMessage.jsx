/* eslint-disable react/prop-types */

function ErrorMessage({error}) {
  return (
    <>
    <div className="px-4 py-3 mb-1 font-bold text-red-700 bg-red-100 border border-red-500 rounded w-96" role="alert">
      <span className="block sm:inline">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        {/* <svg className="w-6 h-6 text-red-500 fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg> */}
      </span>
    </div>
    </>
  )
}

export default ErrorMessage