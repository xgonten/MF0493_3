import { useNavigate, useParams } from 'react-router-dom'
import { getDocument, updateDocument } from '../helpers/cloud-firestore'
import { useEffect, useState } from 'react'

export function EditarVidaLaboral() {
  const { idDoc } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [isloading, setIsloading] = useState(false)
  const { trabajo } = data || false
  useEffect(() => {
    getDocument('vidalaboral', idDoc)
      .then(datos => { setData(datos) })
      .catch(error => console.warn(error))
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  const guardarVidaLaboral = async data => {
    setDisabled(true)
    setIsloading(true)
    try {
      await updateDocument(idDoc, 'vidalaboral', data)
      navigate('/vidalaboral')
    } catch (error) {
      setError(error?.message)
    } finally {
      setDisabled(false)
      setIsloading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const data = Object.fromEntries(formdata.entries())
    guardarVidaLaboral(data)
  }

  return (

    <div className="flex items-center justify-center h-full bg-slate-400" >
      <div className="top-0 flex items-center justify-center w-full h-full min-h-full font-sans bg-gray-500 bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <div className="relative items-center justify-center w-1/2 p-2 px-6 m-auto mx-5 bg-slate-200 h-1/3 sm:h-1/3 md:w-1/3 md:h-1/3 lg:w-full lg: lg:h-1/3 rounded-3xl filter drop-shadow-2xl">
          <div className="mt-3 sm:mt-5">
            <h1 className="text-2xl font-black tracking-wider text-gray-600 sm:text-md">
              Edita la experiencia laboral
            </h1>
          </div>
          <div className="mt-1 sm:mt-8">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="trabajo" className="mb-3 text-base text-gray-700 sm:mt-4 sm:text-md">Trabajo de:</label>
              <input name="trabajo" id="trabajo" type="text" defaultValue={trabajo} className="w-full h-4 border-b-2 border-gray-300 outline-none sm:h-9 focus:border-blue-300" />
              <div className="flex flex-col items-center justify-center mt-2 sm:mt-8">
                <button disabled={disabled} className="relative w-48 h-12 mx-4 overflow-hidden text-lg bg-white rounded-lg shadow group">
                  <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">Guardar</span>
                </button>
              </div>
              <br></br>
              {isloading && 'Guardando.............'}
              <br></br>
              {error && <div className='bg-red-800'>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

