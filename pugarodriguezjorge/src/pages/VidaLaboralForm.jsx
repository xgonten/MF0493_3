import { useNavigate } from "react-router-dom"
import { addDocument } from "../helpers/cloud-firestore"

async function guardarDatos(data) {
  await addDocument('vidalaboral', data) // prueba1 es la colección y data son los documentos(titulo y descripcion name en el html)
}

export function VidaLaboralForm() {
  const navigate = useNavigate() //Hook

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // Almacena todos los controles de formulario que tengan "name"
    const entradas = formData.entries()
    const obj = Object.fromEntries(entradas)
    guardarDatos(obj)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='block' htmlFor='trabajo'>Nombre de Trabajo Realizado</label>
      <input className='border' type='text' name='trabajo' id='trabajo' />
      <button
        className='p-2 text-white bg-black'>Enviar</button>
    </form>
  )
}

