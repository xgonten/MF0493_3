import { useContext, useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { ToastContainer, toast } from 'react-toastify'

// eslint-disable-next-line react/prop-types
function AddReadForm() {
  const [name, setName] = useState("experiencia")
  const [description, setDescription] = useState("descripcion")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [experiencias, setExperiencias] = useState([])
  const [edit, setEdit] = useState("Añadir")
  const [id, setId] = useState("")
  const user = useContext(UserContext)
  const navigate = useNavigate()
  const getter = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "prueba"));
      let copy = []
      querySnapshot.forEach((doc) => {
        copy.push({id:doc.id, name:doc.data().name, description:doc.data().description})
      });
      setExperiencias(copy)
      console.log(experiencias)
      setLoading2(false)
    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    setLoading2(true)
    getter()
    
  }, [])

  useEffect(() => {
    if(!user)
      navigate('/Restricted')
  }, [user])
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let name = e.target.name.value.trim()
    let description = e.target.description.value.trim()
      if(name !="" && description !=""){
        if(edit=="Añadir"){
          try {
            setLoading(true)
            const doc = await addDoc(collection(db,"prueba"),{name: name, description: description, createdAt: serverTimestamp()})
            console.log(doc.id)
            let copy = structuredClone(experiencias)
            copy.push({id:doc.id, name: name, description: description})
            setExperiencias(copy)
            setLoading(false)
            setError("")
          } catch (error) {
            setError(error.message)
            setLoading(false)
          }
        }
        else{
          editDocument()
        }
      }
  }
  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db,"prueba",id))
      getter()
      reset()
      setError("")
      toast.success("Elemento eliminado")
    } catch (error) {
      setError(error.message)
    }
  }

  const editForm = (item) => {
    setId(item.id)
    setName(item.name)
    setDescription(item.description)
    setEdit("Editar")
  }
  const editDocument = async() => {
    try {
      await updateDoc(doc(db,"prueba",id),{name: name, description: description})
      getter()
      setError("")
    } catch (error) {
      setError(error.message)
    }
  }
  const reset = () => {
    setEdit("Añadir"); 
    setName("experiencia"); 
    setDescription("descripcion"); 
    setId("")
  }
  return (
    <>
      <div className='flex flex-col gap-4 mx-auto sm:flex-row'>
        <div className='space-y-4 login-container justify-stretch'>
          <h2 className='text-2xl font-bold text-center'>{edit}</h2>
          { error != "" ? <ErrorMessage error={error} /> : null }
          <form action="#" onSubmit={handleSubmit}>
            <fieldset className='flex flex-col p-4 space-y-4 text-left border-2 rounded-md w-96 border-slate-500'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="name">Nombre</label>
                <input className='p-2 rounded-md' type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
        
              <div className='flex flex-col space-y-2'>
                <label htmlFor="description">Descripcion</label>
                <input className='p-2 rounded-md' type="text" name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <button>{edit}</button>
            </fieldset>
          </form>
          { loading ? <LoadingSpinner /> : null }
        </div>
        <div className='mx-auto mb-4 text-center sm:mt-8'>
          <h2 className='text-2xl font-bold text-center'>Experiencias</h2>
          <ul className='mt-2 list-disc'>
            { loading2 ? <LoadingSpinner /> : null }
            {experiencias != null ? experiencias.map((item) => 
              <li key={item.id} className='flex items-center'><span onClick={() => {setEdit("Editar");editForm(item)}}>{"• "+item.name+" - "+item.description}</span><button className='p-0 mt-1 ml-2 text-right outline-none bg-inherit' 
              onClick={() => deleteDocument(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
              </svg>
            </button></li>
            ) : <p>No se han podido encontrar experiencias</p>}
          </ul>
          <button className='mt-2' onClick={reset}>Añadir</button>
        </div>
        <ToastContainer className="inline-block" position="bottom-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
      </div>
    </>
  )
}

export default AddReadForm
