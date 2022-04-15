import React from 'react'
import './formularioAlimentos.css'

const FormularioAlimentos = () => {
  return (
    <form>
    <div className='contenedor'>
      <div className='d-50'>
        <label className='labelAlimento'>nombre</label>
        <input type="text" className="inputTextAlimento" placeholder='nombre alimento'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>Precio</label>
        <input type="text" className="inputTextAlimento" placeholder='50.0'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento' >tamaño</label>
        <input type="text" className="inputTextAlimento" placeholder='G o M o CH'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>Stock</label>
        <input type="text" className="inputTextAlimento" placeholder='100'/>
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormularioAlimentos