import { useState } from 'react'
import PropTypes from 'prop-types'
import { Contexto } from './ContextoContext'

export function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0)
  return (
    <Contexto.Provider value={{ counter, setCounter }}>
      {children}
    </Contexto.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.any
}


