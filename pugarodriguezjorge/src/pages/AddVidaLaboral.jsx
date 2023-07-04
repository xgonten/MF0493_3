import { useNavigate } from "react-router-dom"
import { addDocument } from "../helpers/cloud-firestore"

async function guardarDatos(data) {
  await addDocument('vidalaboral', data) // prueba1 es la colección y data son los documentos(titulo y descripcion name en el html)
}

export function AddVidaLaboral() {
  const navigate = useNavigate() //Hook

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // Almacena todos los controles de formulario que tengan "name"
    const entradas = formData.entries()
    const obj = Object.fromEntries(entradas)
    guardarDatos(obj)
    navigate('/vidalaboral')
  }

  return (
    <div className="flex items-center justify-center h-full bg-white" >
      <div className="top-0 flex items-center justify-center w-full h-full min-h-full font-sans bg-gray-500 bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <div className="relative items-center justify-center w-1/2 p-2 px-6 m-auto mx-5 bg-white h-1/3 sm:h-1/3 md:w-1/3 md:h-1/3 lg:w-full lg: lg:h-1/3 rounded-3xl filter drop-shadow-2xl">
          <div className="mt-3 sm:mt-5">
            <h1 className="text-sm font-black tracking-wider text-gray-600 sm:text-md">
              Crea una nueva experiencia laboral
            </h1>
          </div>
          <div className="mt-1 sm:mt-8">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="trabajo" className="mt-1 text-xs text-gray-700 sm:mt-5 sm:text-md">Trabajo de:</label>
              <input name="trabajo" id="trabajo" type="text" className="w-full h-4 border-b-2 border-gray-300 outline-none sm:h-9 focus:border-blue-300" />
              <div className="flex flex-col items-center justify-center mt-2 sm:mt-8">
                <button className="w-20 h-8 p-1 text-xs text-gray-100 bg-blue-600 rounded-md sm:h-auto sm:rounded-lg sm:w-52 sm:text-md sm:p-3">
                  Enviar
                </button>
              </div>
              {/* {error?.message}
            {isLoading && 'Cargando...........'} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

