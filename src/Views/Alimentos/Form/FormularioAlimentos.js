import React from 'react'
import './formularioAlimentos.css'
import * as yup from "yup";
import { useState } from 'react';

const FormularioAlimentos = () => {

  const[formData,setformData] = useState({
    nombre:'',
    precio:'',
    tamano:'',
    stock:''
})

  const createAlimento = (e) =>{ // generamos la orden 
    e.preventDefault() 
    console.log(formData)
  }

  //VALIDACION DE FORMULARIO
  let schema = yup.object().shape({
    nombre: yup.string(),
    precio: yup.number(),
    tamano: yup.string(),
    stock: yup.number()
  });
const handleChange=(e)=>{ //obtenemos los datos del formulario
  setformData({
     ...formData, 
      [e.target.nonbre]: e.target.value
  })
}
  return (
    <form onSubmit={createAlimento} onChange={handleChange}>
    <div className='contenedor'>
      <div className='d-50'>
        <label className='labelAlimento'>nombre</label>
        <input type="text" className="inputTextAlimento" placeholder='nombre alimento' name='nombre'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>Precio</label>
        <input type="text" className="inputTextAlimento" placeholder='50.0' name='precio' />
      </div>
      <div className='d-25'>
        <label className='labelAlimento' >tamaño</label>
        <input type="text" className="inputTextAlimento" placeholder='G o M o CH' name='tamano'/>
      </div>
      <div className='d-25'>
        <label className='labelAlimento'>Stock</label>
        <input type="text" className="inputTextAlimento" placeholder='100' name='stock'/>
      </div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
    </div>
    </form>
  )
}

export default FormularioAlimentos