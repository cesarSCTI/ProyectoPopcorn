import React from 'react'
import './formularioFunciones.css'

const FormularioFuncion = () => {
  return (
    <form>
    <div className='contenedor'>
      <div className='d-50'>
        <label className='labelAlimento'>pelicula</label>
        <input type="text" className="inputTextAlimento" placeholder='Nombre de pelicula'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>Fecha</label>
        <input type="date" className="inputTextAlimento"/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento' >Horario</label>
        <input type="text" className="inputTextAlimento" placeholder='13:00-15:00'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>nuemro de sala</label>
        <input type="text" className="inputTextAlimento" placeholder='3'/>
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormularioFuncion