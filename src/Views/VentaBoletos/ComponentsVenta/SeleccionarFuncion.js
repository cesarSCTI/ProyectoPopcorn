import React from 'react'
import { ButtonAmarillo } from '../../../Components/Buttons/Buttons'
import './venta.css'

const SeleccionarFuncion = () => {
  return (
    <>
      <form className='FormularioSeleccionarFuncion'>
        <div className='d-three'>
          <labe className="labelFuncion">Peicula</labe>
          <select className='selectFuncion'>
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div className='d-three'>
          <labe className="labelFuncion">funcion</labe>
          <select className='selectFuncion'>
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div className='d-three'>
          <ButtonAmarillo text={"Seleccionar"} />
        </div>
      </form>
    </>
  )
}

export default SeleccionarFuncion