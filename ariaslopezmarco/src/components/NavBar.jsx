import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


// Barra de Navegación: 

export function NavBar() {
  const { uid } = useContext(UserContext)

  return (
    <nav className='grid place-items-end'>

      <div>
        <Link to='/'></Link>
      </div>
      <div>
        <Link to='/home'>Inicio</Link>
      </div>

      {/*Protexer o acceso: primeiro cunha ternaria para aceder e pechar; despois co apelsand*/}
      {
        uid
          ? (<div>
            <Link to='/logout'>Pechar Sesión</Link>
          </div>)
          : (<div>
            <Link to='/login'>Acceso</Link>
          </div>)
      }

      {uid && (<div>
        <Link to='/articles'>Crear artigos</Link>
      </div>)}

    </nav>
  )
}

