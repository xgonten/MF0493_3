import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocument } from "../cloud-firestore"

export function ArticlePage() {
  const [article, setArticle] = useState(null);
  const { idDoc } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await getDocument("articles", idDoc)
        setArticle(articleData)
      } catch (error) {
        console.warn(error)
      }
    };

    fetchArticle()
  }, [idDoc])

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container bg-view-page">

     <div className="article-page">
       <h2
       className="title-view"
       >{article.titulo}</h2>
       <p
       className="description-view">
        {article.descripcion}</p>
     </div>
     
    </div>
  );
}
