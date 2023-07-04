import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
//para proteger la ruta, o se manda a la home o te aparece mensaje
//de no acceso

//function AccesoNoPermitido () {
 // return (
  //  <>
   // <h1>No tienes acceso a esta área</h1>
   // </>
 // )
//}

export function AccesoPrivado ({ children }) {
  const { uid } = useContext(UserContext)
  //if(!uid) return <AccesoNoPermitido />
  return (
    <>
    {uid ? children : <Navigate to='/' />}
    </>
  )
}

AccesoPrivado.propTypes= {
  children: PropTypes.any.isRequired
}