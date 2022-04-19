import React from 'react'
import './formularioPelicula.css'

const FormularioPelicula = () => {
  return (
    <form>
    <div className='contenedor-formulario-pelicula'>
      <div className='d-100'>
        <label className='labelPelicula'>nombre</label>
        <input type="text" className="inputTextPelicula" placeholder='Nombre de pelicula'/>
      </div>
      <div className='d-50'>
        <label className='labelPelicula'>genero</label>
        <input type="text" className="inputTextPelicula" placeholder='Genero de pelicula'/>
      </div>
      <div className='d-50'>
        <label className='labelPelicula' >url portada</label>
        <input type="text" className="inputTextPelicula" placeholder='www.popcorn.mx/media/titanic.jpg'/>
      </div>
      <div className='d-100'>
        <label className='labelPelicula'>descripción</label>
        <textarea className='textarea'></textarea>
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormularioPelicula