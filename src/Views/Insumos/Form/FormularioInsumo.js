import React from 'react'
import './formularioInsumo.css'

const FormularioInsumo = () => {
  return (
    <form>
    <div className='contenedor'>
      <div className='d-50'>
        <label className='labelPelicula'>nombre</label>
        <input type="text" className="inputTextPelicula" placeholder='Nombre de insumo'/>
      </div>
      <div className='d-25'>
        <label className='labelPelicula'>cantidad</label>
        <input type="text" className="inputTextPelicula" placeholder='cantidad de insumo'/>
      </div>
      <div className='d-25'>
        <label className='labelPelicula' >tipo</label>
        <input type="text" className="inputTextPelicula" placeholder='KG o L'/>
      </div>
      <div className='d-25'></div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
      <div className='d-25'></div>
    </div>
    </form>
  )
}

export default FormularioInsumo