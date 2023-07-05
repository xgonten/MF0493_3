import { useState } from 'react';
import { insertDB } from '../Hooks/useFirestore';
import '../css/CustomExperienceCard.css'
import { getStorage, ref, uploadBytes , getDownloadURL} from "firebase/storage";



function CreateExperienceCard() {

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [img,setImg] = useState('');  

  async function upload() {
    if (!img) return ''
    const storage = getStorage();
    const storageRef = ref(storage, `experiences/${img.name}`);
   
    try {
      await uploadBytes(storageRef, img)
      return await getDownloadURL(ref(storage,`experiences/${img.name}`))
    } catch(error) {
      console.log(error)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {

      const url = await upload()
      console.log(url)
      await insertDB(desc,url,title) // el img tiene que ser el url
      alert("La experiencia ha sido guardada!")
    } catch (error) {
      alert("Ha ocurrido un problema al guardar la experiencia.")
      console.error('aaaaaa',error)
    }
  }

  const handleFile = e => {
    setImg(null)
    if (e.target.files.length)
     setImg(e.target.files[0])
  }
   
  return (
    <form className='exp-form' onSubmit={handleSubmit}>
        <h1 className='exp-h1'>CREATE EXPERIENCE</h1>
        <input type="text" placeholder='Título' className='exp-t' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows="4" cols="50" placeholder='Escribe aquí.' className='exp-txt' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        <input type="file" name="background" accept="image/png, image/jpeg" className='exp-img' onChange={handleFile}></input>
        <button className='ctm-exp-btn'>CREATE</button>
    </form>
  )

}

export default CreateExperienceCard;
