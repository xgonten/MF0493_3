import { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { getDocuments } from '../helpers/firebase/cloud-firebase'

export function HomePage() {
  const { email } = useContext(UserContext)
  const [data, setData] = useState([])

  useEffect(() => {
    getDocuments('misexperiencias').then(datos => setData(datos))
  }, [])

  return (
    <div>
      <h2 className='text-3xl font-extrabold leading-tight tracking-tight text-center text-gray-800 sm:text-4xl dark:text-white'>Página home {email}</h2>
      <div className='grid grid-cols-1 m-4 mt-12 space-y-4 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
        {
          data.map(item => (
            <div key={item.idDoc} className='w-full px-3 py-2 border-4 rounded shadow appearance-none border-lime-300 text-grey-darker bg-lime-50'>
              <div className='text-2xl font-bold leading-tight text-gray-900 dark:text-white'>{item?.titulo} </div>
              <div className='text-lg font-normal text-gray-500 dark:text-gray-400'>{item?.descripcion}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}










