import './css/HomePage.css'
import NavBar from './components/NavBar.jsx'
import CustomCard from './components/CustomCard'
import Slideshow from './components/Slideshow'
import CustomExperienceButton from './components/CustomExperienceButton'
import { useUser } from './Hooks/useUser'
import { getDocumentos } from './Hooks/useFirestore'
import { useEffect, useState } from 'react'
import CardDeleteMenu from './components/CardDeleteMenu'


function App() {

  const { user } = useUser()

  const [data, setData] = useState([])

  useEffect(() => {
    
    getDocumentos().then(data=>setData(data))
  
  }, [])
  
  return (
    <>
      <div>
        <Slideshow/>
        <NavBar/>
        <div id="main-content">
          {user && <CustomExperienceButton/>}
          {data.map((item,index)=>{
         return <CustomCard key={index} card={item}/>
     })}
        </div>
        <CardDeleteMenu/>
        <footer>
        </footer>
      </div>
    </>
  )
}

export default App
