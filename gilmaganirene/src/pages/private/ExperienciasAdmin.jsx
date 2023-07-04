import { useState, useEffect } from "react"
import { deleteDocument, getDocuments } from "../../helpers/firebase/cloud-firebase"
import { Link } from "react-router-dom"

export function ExperienciasAdmin() {
  const [data, setData] = useState([])
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    getDocuments('misexperiencias').then(datos => setData(datos))
  }, [])

  const handleDelete = async idDoc => {
    try {
      await deleteDocument('misexperiencias', idDoc)
      const nuevaData = data.filter((item) => { return item.idDoc !== idDoc })
      setData(nuevaData)
    } catch (error) {
      console.log('NOOOOOOOOOOOOOOOOO', error)
    }
  }

  const handleChange = (e) => {
    setDisable(!e.target.checked)
  }
  return (
    <>
      <h2 className='text-3xl font-extrabold leading-tight tracking-tight text-center text-gray-800 sm:text-4xl dark:text-white'>Administrador de experiencias</h2>
      <div className="px-6 mx-6 mt-10">
        <Link to='/nueva-experiencia' type='button' className='px-4 py-1 text-2xl text-black bg-indigo-200 border rounded shadow hover:bg-indigo-400'>Añade nueva experiencia</Link>
        {
          data.map(item => (
            <div key={item.idDoc} className='px-4 py-1 my-5 border rounded shadow-md'>
              <div className="font-bold">{item?.titulo}</div>
              <div>{item?.descripcion}
                <form onSubmit={(e) => { e.preventDefault(); handleDelete(item.idDoc) }} name="form1" className="px-4 py-1 my-10 border rounded shadow-md">
                  <Link to={`/experiencias/editar-experiencia/${item.idDoc}`} className='px-4 py-1 m-10 text-lg text-black rounded hover:bg-indigo-400'>Editar</Link>
                  <input onChange={handleChange} type="checkbox" value="delete" name="delete" id="delete" />
                  <button disabled={disable} type="submit" id="delete" name="delete" className='px-4 py-1 ml-2 text-lg text-black rounded hover:bg-red-300'>Eliminar</button>
                </form>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
