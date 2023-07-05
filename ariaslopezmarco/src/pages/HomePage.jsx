import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { getDocuments } from "../cloud-firestore"
import { Link } from "react-router-dom"


export function HomePage() {
  const { email } = useContext(UserContext)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getDocuments("articles")
        setData(datos)
      } catch (error) {
        console.warn(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "..."
    }
    return description
  }


  return (
    <>
      <div className="app-container bg-image-home">
      <div className="m-4 article-list">
        {isLoading ? (
          <ul className="skeleton-list">
          {[...Array(9)].map((_, index) => (
            <li key={index} className="skeleton-item">
            </li>
          ))}
        </ul>
        ) : (
          data?.map((item) => (
            <div key={item.idDoc} className="articulo">
              <Link to={`/articles/${item.idDoc}`} className="uppercase text-cyan-200">
                {truncateDescription(item?.titulo, 70)}
              </Link>
              <div className="article-footer" key={item?.id}>
                <div>
                  <Link to={`/articles/edit/${item.idDoc}`}>Editar</Link>
                </div>
                <div className="email">{email}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  )
}
