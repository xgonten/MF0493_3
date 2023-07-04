import { auth } from "../helpers/firebase/firebase"
import { useUser } from "../hooks/useUser"
import PropTypes from 'prop-types'
import { UserContext } from "./UserContext"

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

