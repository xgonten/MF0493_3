/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import { getDocument, updateDocument, deleteDocument } from "../cloud-firestore"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export function EditarArticle() {
  const { uid } = useContext(UserContext)
  const { idDoc } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const { titulo, descripcion } = data || {}
  const [error, setError] = useState('')
  const [deleteChecked, setDeleteChecked] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)


  useEffect(() => {
    getDocument('articles', idDoc)
      .then(datos => {
        setData(datos)
      })
      .catch(error => console.warn(error))
  }, [])

  const guardarEdicionArt = async (data) => {
    setIsSaving(true)
    try {
      await updateDocument(idDoc, 'articles', data)
      navigate('/home')
    } catch (error) {
      setError(error?.message)
    } finally {
      setIsSaving(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    guardarEdicionArt(data)
  }

  const deleteArticle = async (idDoc) => {
    try {
      setIsDeleting(true)
      await deleteDocument('articles', idDoc)
      navigate('/home')
    } catch (error) {
      setError('No tienes permisos suficientes para eliminar')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDelete = () => {
    if (deleteChecked && uid) {
      deleteArticle(idDoc)
    }
  }

  const toggleDeleteChecked = () => {
    setDeleteChecked((prevValue) => !prevValue)
  }

  return (

    <form className="app-container bg-edit-page" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título</label><br />
        <input
          className="m-2"
          type='text'
          required
          name="titulo"
          defaultValue={titulo}
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descrición:</label><br />
        <textarea
          className="m-2"
          type='text'
          name="descripcion"
          defaultValue={descripcion}
        />
      </div>

      <div className="botonera">

        <button className="m-2" disabled={isSaving}>
          {isSaving ? 'Guardando...' : 'Guardar'}
        </button>

        <label htmlFor="deleteCheckbox" className="delete-label">
          <input
            className="m-1"
            type="checkbox"
            id="deleteCheckbox"
            checked={deleteChecked}
            onChange={toggleDeleteChecked}
          />
          <button
            className="delete-button"
            onClick={handleDelete}
            disabled={!deleteChecked || !uid || isDeleting}>
            {isDeleting ? 'Eliminando...' : 'Eliminar'}
          </button>
        </label>
      </div>
      {error && <div className="bg-red-600">{error}</div>}
    </form>
  )
}
