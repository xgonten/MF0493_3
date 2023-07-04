import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export function NavBar() {
  const { uid, _signOut } = useContext(UserContext)
  const navigate = useNavigate()

  return (

    <nav className='flex gap-4 p-4'>
      <div>
        <Link to='/'><strong>Inicio</strong></Link>
      </div>
      <fieldset className=''>
        {
          uid
            ? <button
              className='p-2 bg-red-500 rounded'
              onClick={() => _signOut()}
            >
              Cerrar Sesión
            </button>
            : <button
              className='p-2 bg-green-400 rounded'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
        }
      </fieldset>
      {uid &&
        <div>
          <Link to='/vidalaboral'
            className="p-2 bg-orange-300">Vida Laboral</Link>
        </div>
      }
      {uid &&
        <div>
          <Link to='/estudios'
            className="p-2 bg-orange-400">Estudios</Link>
        </div>
      }
    </nav>

  )
}

