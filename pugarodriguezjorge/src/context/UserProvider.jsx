
import { useUser } from "../Hooks/useUser";
import { auth } from "../helpers/firebase";
import { UserContext } from "./UserContext";
import PropTypes from 'prop-types'


export function UserProvider({ children }) {
  const data = useUser(auth)
  return (
  <UserContext.Provider value={data}>
    {children}
  </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}

