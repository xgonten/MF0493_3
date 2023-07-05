import { UserContext } from './UserContext'
import PropTypes from 'prop-types'
export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ nombre: 'Under' }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}