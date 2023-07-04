import { useRouteError } from 'react-router-dom'

export function ErrorPage () {
  const error = useRouteError()
  // console.error(error)

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h1 className='text-8xl'><strong>Oops!</strong></h1>
      <p className='text-6xl'><strong>Lo sentimos, a ocurrido un error inesperado.</strong></p>
      <p className='text-4xl'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
