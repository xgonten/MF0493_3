import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import PropTypes from "prop-types"

export function AccesoPrivado({ children }) {
  const { uid } = useContext(UserContext)
 
  return (
    <>
      { uid ? children : <Navigate to='/' />}
    </>
  )
}

AccesoPrivado.propTypes = {
  children: PropTypes.any.isRequired
}
