import { useNavigate } from 'react-router-dom'
import { addDocument } from '../helpers/firebase/CloudFirestore'


async function guardarDatos(data) {
  await addDocument('prueba', data)
}

export function ProjectsForm() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const entradas = formData.entries()
    const obj = Object.fromEntries(entradas)
    guardarDatos(obj)
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-5xl font-semibold text-stone-800 mb-4 mt-6">Nuevo Proyecto</h1>
      <form onSubmit={handleSubmit} className='bg-white rounded-lg flex flex-col gap-5 p-9 w-3/5 mt-6' >
        <label className='block text-black text-lg font-semibold' htmlFor='titulo'>Título*</label>
        <input className='border rounded p-2' type='text' required name='titulo' id='titulo' />
        <label className='block text-black text-lg font-semibold' htmlFor='descripcion'>Descripción*</label>
        <textarea className='block border rounded p-2' name="descripcion" id="descripcion" cols="1" rows="5"></textarea>
        <label className='block text-black text-lg font-semibold' htmlFor='github'>Link a GitHub</label>
        <input className='border rounded p-2' type='url' name='github' id='github' />
        <button className='block w-full px-4 py-2 font-bold text-white rounded bg-stone-700 hover:bg-black' >Enviar</button>
      </form>
    </div>
  )
}
