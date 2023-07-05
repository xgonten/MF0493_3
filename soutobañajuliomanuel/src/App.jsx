import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail'

export const UserContext = createContext()
function App() {
  const [loggeado, setLoggeado] = useState(false)
  const [login, setLogin] = useState(null)

  useEffect(() => {
    // if(localStorage.getItem('user') != "")
    //   setLogin(JSON.parse(localStorage.getItem('user')))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user)
        setLoggeado(true)
      }
      else{
        setLogin(null)
        setLoggeado(false)
      }
    });
  }, [])

  return (
    <>
      <UserContext.Provider value={login}>
        <MouseTrail strokeColor='#413cff' lag={0.7} lineDuration={30} lineWidthStart={10} />
        <Nav loggeado={loggeado}/>
        <div className='flex flex-col'>
          <Header />
          {login != null ?
          <div className='px-2 py-1 text-center lg:text-right'>
            <h2 className='inline-block mr-2 text-2xl font-bold'>Bienvenido</h2>
            <p className='inline-block'>{login.email}</p>
          </div> : null }
          <Outlet />
          <div className='spacer'></div>
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
