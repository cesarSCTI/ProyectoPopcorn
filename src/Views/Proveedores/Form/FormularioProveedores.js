import React from 'react'
import './formularioProveedores.css'

const FormularioProveedores = () => {
  return (
    <form>
    <div className='contenedor'>
      <div className='d-100'>
        <label className='labelAlimento'>nombre</label>
        <input type="text" className="inputTextAlimento" placeholder='nombre Proveedores'/>
      </div>
      <div className='d-50'>
        <label className='labelAlimento'>Correo</label>
        <input type="email" className="inputTextAlimento" placeholder='ejemplo@ejemplo.com'/>
      </div>
      <div className='d-50'>
        <label className='labelAlimento' >empresa</label>
        <input type="text" className="inputTextAlimento" placeholder='empresa sa de cv'/>
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormularioProveedores