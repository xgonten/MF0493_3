import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addDocument } from '../../helpers/firebase/cloud-firebase'

export function NuevaExperienciaForm() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const insertData = async (data) => {
    setError(null)
    setIsLoading(true)
    try {
      if (!data.titulo.length) throw new Error('El campo titulo no puede estar vacío')
      await addDocument('misexperiencias', data)
      navigate('/')
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleSubmit = (evento) => {
    evento.preventDefault()
    const formData = new FormData(evento.target)
    // console.log(formData.get('titulo'))
    const data = Object.fromEntries(formData.entries())
    insertData(data)
  }
  return (
    <form className='box-border max-w-sm border-gray-400 w-500 h-500 md:box-content center' onSubmit={handleSubmit}>
      <div className="mb-6 md:flex md:items-center campo">
        <div className="md:w-1/3">
          <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0' htmlFor='titulo'>
            Título
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            className='w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
            type='text'
            id='titulo'
            name='titulo'
          />
        </div>
      </div>
      <div className='mb-6 md:flex md:items-center campo'>
        <div className='md:w-1/3'>
          <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0' htmlFor='descripcion'>
            Descripción
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className='w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
            type='text'
            id='descripcion'
            name='descripcion'
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <button
          disabled={isLoading}
          className='px-4 py-2 font-bold text-white bg-indigo-400 rounded shadow hover:bg-indigo-200 focus:shadow-outline focus:outline-none'
        >Enviar
        </button>
      </div>
      {error?.message}
      <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
        {isLoading && <div className="w-40 h-40 border-4 border-blue-400 rounded-full animate-spin">
        </div>}
      </div>
    </form>
  )
}

