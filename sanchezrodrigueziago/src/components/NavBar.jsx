import "../css/NavBar.css"
import { Link , useNavigate } from "react-router-dom"
import SignOut from "./SignOut";
import { useUser } from "../Hooks/useUser";

function NavBar() {
  const { user } =useUser()

  const navigate = useNavigate();

    return (
      <>
      <div className="header">
        <div>
          <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
          <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
          <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
              <li>IAGO SÁNCHEZ <span>ABOUT ME</span></li>
              <li><Link>PROYECTS</Link></li>
              <li><Link>EXPERIENCE</Link></li>
              <li><Link>GIT HUB</Link></li>
              <li><Link>LINKTREE</Link></li>
              <li><Link>CONTACT</Link></li>
            </ul>
          </div>
        </div>
        {/* <p></p>
        <button onClick={()=>navigate("/login")}>LOG IN {user?.email}</button>
        <SignOut/> */}
        {user ? (
          <p>YOU ARE LOGGED AS : {user?.email}</p>
        ) : (
          <p>YOU ARE NOT LOGGED IN</p>
        )}
        {user ? (
          <SignOut/>
        ) : (
          <button onClick={()=>navigate("/login")} className='nav-btn'>LOG IN {user?.email}</button>
        )}
      </div>
      </>
    )
  }
  
  export default NavBar