/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { getDocument, updateDocument } from '../../helpers/firebase/cloud-firebase'
import { useState, useEffect } from 'react'

/*export function EditarExperiencia () {
  const parametros = useParams()
  const [experiencia, setExperiencia ] = useState({})
  const { experienciaId } = parametros
  useEffect(() => {
    getDocument('misexperiencias', experienciaId)
    .then(data => setExperiencia(data))
  }, [])
  return (
    <div>
      Experiencia
      {JSON.stringify(experiencia, null, 3)}
    </div>
  )
}*/
export function EditarExperiencia() {
  const { idDoc } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { titulo, descripcion } = data || false
  useEffect(
    () => {
      getDocument('misexperiencias', idDoc)
        .then(datos => { setData(datos) })
        .catch(error => console.warn(error))
    },
    []
  )

  const actualizarExperiencia = async data => {
    setDisabled(true)
    setIsLoading(true)
    try {
      await updateDocument(idDoc, 'misexperiencias', data)
      navigate('/experiencias')
    } catch (error) {
      setError(error?.message)
    } finally {
      setDisabled(false)
      setIsLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const data = Object.fromEntries(formdata.entries())
    actualizarExperiencia(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='p-4'>
        <div className="md:w-1/3">
          <label htmlFor='titulo' className='font-bold text-gray-500'>Título</label>
          <input required className='w-2/3 px-4 py-2 m-3 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
            type="text" name="titulo" defaultValue={titulo} />
        </div>
        <div>
          <label htmlFor='descripcion' className='font-bold text-gray-500'>Descripción</label>
          <input className='w-2/3 px-4 py-2 m-3 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white'
            type="text" name="descripcion" defaultValue={descripcion} />
        </div>
        <button disabled={disabled} className='px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600'>Guardar</button>
        <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
          {isLoading && <div className="w-40 h-40 border-4 border-blue-400 rounded-full animate-spin">
          </div>}
        </div>
        {error && <div className='text-white bg-red'>{error}</div>}
      </form>
    </>
  )
}

