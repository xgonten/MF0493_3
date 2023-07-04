import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { SettingsIcon, HomeIcon, SettingsIconOpenMenu  } from "../assets";
import { LogoutIcon } from "../assets/Iconos/LogoutIcon";

export function NavBar() {  
  const {user, _signOut} = useContext(UserContext)
  const navigate = useNavigate()
  const handleSignOut = () => {
    _signOut()
    setMenuOpen(false)
    navigate('/')
  }
  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="relative bg-gray-900">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-lg font-light text-white" onClick={() => setMenuOpen(false)}><Link to="/">PORTFOLIO</Link></h1>
        <ul className="flex items-center gap-2 font-medium text-white font-montserrat">
          <li className="p-1 pr-2 rounded hover:bg-slate-600"><Link to="/"><HomeIcon/></Link></li>
          <li>
            { user.uid &&
            (<button className="flex items-center p-1 space-x-2 text-white rounded hover:bg-slate-600" onClick={toggleMenu}>
              <span className="hidden text-sm font-light sm:inline font-montserrat">CONFIGURACIÓN</span>
              {!menuOpen ? <SettingsIcon/> : <SettingsIconOpenMenu/>}
            </button>)}

            {menuOpen && 
            (<ul className="absolute mt-2 text-white bg-gray-900 rounded">
                <li className="hover:bg-slate-600 hover:rounded"><Link to="nuevo-contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Añadir Contenido</Link></li>
                <li className="hover:bg-slate-600 hover:rounded"><Link to="contenido" className="block px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>Editar Contenido</Link></li>
              </ul>)}
          </li>
          <li className="p-1 font-light rounded hover:bg-slate-600 font-montserrat">
            {user.uid ? <button className='flex items-center justify-center ml-2 text-sm font-light text-white font-montserrat' onClick={handleSignOut}>
              <span className="hidden mr-2 text-sm font-light sm:inline font-montserrat">CERRAR SESIÓN</span>
              <LogoutIcon/>
              </button> : <Link to="login" className='text-sm font-light text-white font-montserrat'>LOGIN</Link>}
          </li>
        </ul>
      </div>
    </nav>
  )
}
