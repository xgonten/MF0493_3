import { useUser } from '../Hooks/useUser';
import '../css/NavBar.css'

export default function SignOut() {
 const {userSignOut} = useUser()
  return (
    <button onClick={userSignOut} className='nav-btn'>SIGN OUT</button>
  )
}
