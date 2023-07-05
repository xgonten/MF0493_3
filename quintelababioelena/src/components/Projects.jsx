import { useContext, useEffect, useState } from 'react'
import { deleteDocument, getDocuments } from '../helpers/firebase/CloudFirestore'
import { UserContext } from '../context/UserContext'
import deleteLogo from '../assets/delete.svg'

export function Projects() {
  const { uid } = useContext(UserContext)

  const [data, setData] = useState([])
  useEffect(() => {
    getDocuments('prueba').then(datos => setData(datos))
  }, [])

  const deletePrueba = async (idDoc) => {
    try {
      await deleteDocument('prueba', idDoc)
      const tmp = data.filter(function (item) {
        if (item.idDoc !== idDoc) return item
      })
      setData(tmp)
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const handleDelete = idDoc => {
    if (!confirm(`¿Confirma que desea eliminar el documento ${idDoc}?`)) return
    deletePrueba(idDoc)
  }


  return (
    <>
      <h1 className="text-2xl font-semibold text-white mb-4 text-right bg-slate-800 p-4">Mis proyectos</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          data.map(item => (
            <div key={item.idDoc} className="flex flex-col justify-between items-start bg-stone-300 p-5 rounded-lg hover:bg-blue-200 hover:text-stone-800">
              <div className="font-bold flex w-full justify-between items-start text-xl mb-3">
                <div className='w-4/5 line-clamp-3'>{item?.titulo}</div>
                {uid && <button onClick={() => handleDelete(item.idDoc)} >
                  <img src={deleteLogo} alt="eliminar" className="w-6 h-6" />
                </button>}
              </div>
              <div className='mb-4 line-clamp-5'>{item?.descripcion}</div>

              <a href={item?.github} rel='noreferrer' target='_blank' className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative text-base">Ver en GitHub</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>

            </div>
          ))
        }
      </div>
    </>
  )
}

