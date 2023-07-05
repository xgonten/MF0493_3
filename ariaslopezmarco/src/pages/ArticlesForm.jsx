import { useNavigate } from "react-router-dom"
import { addDocument } from "../cloud-firestore"
import { useEffect, useState } from "react"


export function ArticlesForm() {
 const [error, setError] = useState(null)
 const [isLoading, setIsLoading] = useState(false)
 const navigate = useNavigate()     // hook, fuera del componente. Su declaración, dentro.

 const guardarDatos = async (data) => {
  setError(null)
  setIsLoading(true)

  try {
   if (!data.titulo.length) throw new Error('El campo Título no puede estar vacío')
   await addDocument('articles', data)
   navigate('/home')
  } catch (error) {
   setError(error)
  } finally {
   setIsLoading(false)
  }
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)  // almaceno todos los controles del formulario con 'name'
  const data = Object.fromEntries(formData.entries())
  guardarDatos(data)  // :añadir datos a firestore
 }
 
 useEffect (() => {
  let timeoutId;
  if (error) {
    timeoutId = setTimeout(() => {
      setError(null);
    }, 5000);
  }
  return () => {
    clearTimeout(timeoutId);
  };
}, [error])


 return (

  <form 
   className='app-container create-bg-image'
   onSubmit={handleSubmit}>
    
   <div>
    <label htmlFor="titulo"></label>
    <input
     className='m-3 border'
     type="text"
     id='titulo'
     name='titulo'
     placeholder=' Título'
     />
   </div>
   {error && <span className="error-message">{error.message}</span>}  

   <div>
    <label htmlFor="descripcion"></label>
    <textarea
     className='m-3'
     type="text"
     name='descripcion'
     id='descripcion'
     placeholder=" descripción">
    </textarea>
   </div>

   <button
    className="w-20 m-2"
    disabled={isLoading}
   >Enviar
   </button>
   {isLoading && 'Cargando...'}

  </form>
 )
}
