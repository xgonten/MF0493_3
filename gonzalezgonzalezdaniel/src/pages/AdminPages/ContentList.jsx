import { useEffect, useState } from "react"
import { getDocuments } from "../../helpers/firebase/cloud-firestore"
import { Link, Outlet, useParams } from "react-router-dom"

export function ContentList() {
  const [dataBD, setDataBD] = useState([])
  const [error, setError] = useState(null);
  const [option, setOption] = useState('Experiencia')
  const parametros = useParams()
  const { id } = parametros

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getDocuments(option)
        setDataBD(datos)
      } catch (error) {
        setError("Error al cargar los datos")
      }
    }
  
    fetchData()
  }, [id])

  const sortedData = dataBD.sort((a, b) => a.titulo.localeCompare(b.titulo));

  const handleChange = (e) => {
    setOption(e.target.value)
    getDocuments(e.target.value).then((datos) => setDataBD(datos))
  }

  const handleScrollToEdit = () => {
    const editContentElement = document.getElementById("editar-contenido");
    if (editContentElement) {
      editContentElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>    
      {error && (<div className="items-center justify-center h-screen"><span className="text-xl text-gray-900 font-montserrat">{error.message}</span></div>)}
      <div className="pb-10 bg-gray-800">
        <div className="container p-4 mx-auto">
          <select name="tipoContenido" id="tipo-contenido"  className="p-2 border rounded" onChange={handleChange}>
            <option value="Experiencia">Experiencia</option>
            <option value="Formacion">Formación</option>
            <option value="Premios">Premios</option>
            <option value="Publicaciones">Publicaciones</option>
          </select>
          <h2 className="mt-8 text-4xl text-center text-gray-100 font-montserrat">{option}</h2>
          {sortedData.map((item) => (
            <div key={item.idDoc} className="flex flex-col p-4 mt-5 bg-gray-100 border border-white rounded">
              <div className="text-lg font-bold text-gray-800 font-montserrat">{item?.titulo}</div>
              <div className="pt-1 font-medium text-gray-800 font-montserrat">{item?.descripcion}</div>
              <div className="flex justify-end mt-4"><Link to={`/contenido/${option}/${item.idDoc}`} className="text-blue-500 underline font-montserrat" onClick={handleScrollToEdit}>Editar contenido</Link></div>
              <div className="text-gray-600 font-montserrat">{item?.tipoContenido} {'//'} {item?.year}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
