import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export function NavBar() {
  const { uid, _signOut } = useContext(UserContext)

  return (<>
    <nav className="flex justify-end gap-8 ml-12 mr-12 text-lg">
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        {uid && <div><Link to='/nuevo-proyecto'>Nuevo proyecto</Link></div>}
      </div>
      <div>
        {!uid && <div> <Link to='/login'>Iniciar sesión</Link> </div>}
        {uid && <button onClick={() => _signOut()} className='text-white' type='button'>Cerrar sesión</button>}
      </div>
    </nav>
  </>)
}
