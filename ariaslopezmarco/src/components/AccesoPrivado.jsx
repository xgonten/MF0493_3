import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import PropTypes from 'prop-types'
import nopuedes from '../assets/nopuedes.jpg'

function AccesoPrivadoMensaje() {
  return (
    <>
      <img
      src={nopuedes} 
      alt='Non podes pasar sen estar rexistrado'>
      </img>
    </>
  )
}

export function AccesoPrivado({ children }) {
  const { uid } = useContext(UserContext)
  if (!uid) return <AccesoPrivadoMensaje />
  return (
    <>
      {children}
    </>
  )
}

AccesoPrivado.propTypes = {
  children: PropTypes.any.isRequired
}

