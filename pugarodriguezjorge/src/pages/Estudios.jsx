import { useEffect, useState } from "react"
import { deleteDocument, getDocuments } from "../helpers/cloud-firestore"
import { Link } from "react-router-dom"

export function KnowledgePage() {
  const [data, setData] = useState([])

  const handleDelete = idDoc => {
    try {
      deleteDocument('estudios', idDoc)
      const nuevaData = data.filter((item) => item.idDoc !== idDoc)
      setData(nuevaData)
    // eslint-disable-next-line no-empty
    } catch (error) {
    }
  }

  useEffect(() => {
    getDocuments('estudios').then(setData)
  }, [])

  return (
    <>
      <h2 className="text-4xl text-center">Estudios</h2>
      <br></br>
      <div className="grid items-stretch grid-cols-3 px-5 gap-x-4 gap-y-4">
        {
          data.map(item => (
            <div
              className="flex flex-col justify-between p-3 text-2xl bg-orange-200 border-4 border-green-500 boder-solid"
              key={item.idDoc}>
              {item.saber}
              <div className="flex space-x-10">
                <button
                  onClick={() => handleDelete(item.idDoc)}
                  className="flex w-20 px-2 py-1 mt-4 text-blue-600 border-2 border-blue-600 rounded-full shadow focus:outline-none focus:border-blue-600 hover:bg-blue-600 hover:text-white">
                  <span className="text-base">Eliminar</span>
                </button>
                <Link className="flex px-2 py-1 mt-4 text-base text-green-600 border-2 border-green-600 rounded-full shadow w-15 focus:outline-none focus:border-blue-600 hover:bg-green-600 hover:text-white" to={`/estudios/${item.idDoc}`}>Editar</Link>
              </div>
            </div>
          ))
        }
      </div>
      <br></br>
      <div className="flex justify-center w-full">
        <Link className="px-2 py-1 text-base text-orange-600 border-2 border-orange-600 rounded-full shadow w-15 focus:outline-none focus:border-orange-600 hover:bg-orange-600 hover:text-black" to={'/editestudios'}><strong>Nuevo</strong></Link>
      </div>
      <br></br>
    </>
  )
}

