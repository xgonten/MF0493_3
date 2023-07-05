import React, { useRef } from 'react'
import '../css/CardDeleteMenu.css'
import { useDeleteMenu } from '../Hooks/useDeleteMenu'

function CardDeleteMenu(card) {

  return (
    <div className='delmenu'>
        <p className='adv'>¡ADVERTENCIA!</p>
      <fieldset className='del-check-div'>
        <p>Estás seguro que deseas eliminar esta experiencia?</p>
        <input type="checkbox" id="horns" name="horns" className='del-check'/>
      </fieldset>
        <div className='del-bt-div'>
          <button className='del-bt'>ACEPTAR</button>
          <button className='del-bt'>CANCELAR</button>
        </div>
    </div>
  )
}

export default CardDeleteMenu