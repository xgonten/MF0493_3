import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export function LogOutForm () {
 const { _signOut } = useContext(UserContext)

 return (
  <>
  <div className="app-container logout-bg-image">
   <div className="flex place-content-end">
    <button
    className="m-4"
    onClick={() => _signOut()}
    type="button">Pechar Sesión</button>
   </div>
  </div>
 </>
 )
}
