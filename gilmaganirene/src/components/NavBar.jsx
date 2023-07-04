import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"



export function NavBar() {
  const { uid, _signOut } = useContext(UserContext)

  return (

    <nav className='flex justify-end px-4 py-4 space-x-2'>

      <div>
        <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' type='button'>
          <Link to='/'>Home</Link>
        </button>
      </div>


      <div>
        <button className='px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700' type='button'>
          <Link to='/login'>Acceso</Link>
        </button>
      </div>

      {uid && (<div>
        <button className='px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700' type='button'>
          <Link to='/experiencias'>Experiencias</Link>
        </button>
      </div>)}

      <div>
        <button className='px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700' type='button'>
          <Link to='/contact'>Contacto</Link>
        </button>
      </div>

      {uid && (<div>
        <button onClick={() => _signOut()} className='px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700' type='button'>
          <Link to='/logout'>Cierre sesión</Link>
        </button>
      </div>)}
    </nav>
  )
}