import React from 'react'
import './FormEmpleado.css';

const FormEmpleado = () => {
  return (
    <form>
    <div className='contenedor'>
      <div className='d-25'>
        <label className='labelEmpleado'>RFC</label>
        <input type="text" className="inputText" placeholder='xxx-xxx-xxx-xxx-x'/>
      </div>
      <div className='d-25'>
        <label className='labelEmpleado'>NSS</label>
        <input type="text" className="inputText" placeholder='xxxxxxxxxxx'/>
      </div>
      <div className='d-50'>
        <label className='labelEmpleado'>Nombre</label>
        <input type="text" className="inputText" placeholder='Nombre completo'/>
      </div>
      <div className='d-50'>
        <label className='labelEmpleado'>Dirección</label>
        <input type="text" className="inputText" placeholder='Dirección de Empleado'/>
      </div>
      <div className='d-25'>
        <label className='labelEmpleado'>Estado</label>
        <input type="text" className="inputText" placeholder='EX: Jalisco'/>
      </div>
      <div className='d-25'>
        <label className='labelEmpleado'>Teléfono</label>
        <input type="text" className="inputText" placeholder='101-010-1010'/>
      </div>
      <div className='d-25'>
        <label className='labelEmpleado'>Fecha Nacimiento</label>
        <input type="date" className="inputText" />
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormEmpleado