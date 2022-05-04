import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import './formularioAlimentos.css'
import * as yup from "yup";

const FormularioAlimentos = ({idAlimento}) => {
const navigate = useNavigate();
const [error, setError] = useState(false);
const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
    ID_Alimento: `${idAlimento}`,
    Nombre: '',
    Precio: '',
    Tamano: '',
    Stock: ''
  })
  //VALIDACION DE FORMULARIO
  let Schema = yup.object().shape({
    Nombre: yup.string().required('campo obligatorio'),
    Precio: yup.number().required('campo obligatorio').min(0),
    Tamano: yup.string().required('campo obligatorio').min(1).max(2),
    Stock: yup.number().required('campo obligatorio').min(0)
  });

  //Creamos el Alimento
  const createAlimento = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if( validacion){
      fetch('http://localhost:3050/alimento', {
      method: 'POST',
      body: JSON.stringify(formData), 
      headers:{
        'Content-Type': 'application/json'
      }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .finally(()=>{
        setExito(true);
      })
    }
    else{
      setError(true);
    }
  }

  const handleChange = (e) => { //obtenemos los datos del formulario
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={createAlimento} onChange={handleChange}>
        <div className='contenedor'>
          <div className='d-50'>
            <label className='labelAlimento'>nombre</label>
            <input type="text" className="inputTextAlimento" placeholder='nombre alimento' name='Nombre' />
          </div>
          <div className='d-25'>
            <label className='labelAlimento'>Precio</label>
            <input type="text" className="inputTextAlimento" placeholder='50.0' name='Precio' />
          </div>
          <div className='d-25'>
            <label className='labelAlimento' >tamaño</label>
            <input type="text" className="inputTextAlimento" placeholder='G o M o CH' name='Tamano' />
          </div>
          <div className='d-25'>
            <label className='labelAlimento'>Stock</label>
            <input type="text" className="inputTextAlimento" placeholder='100' name='Stock' />
          </div>
          <div className='d-50'>
            <button className='btnGuardar'>Guardar</button>
          </div>
        </div>
      </form>
      {error 
      && 
      <AlertaError Text="Ha ocurrido un error">
        <ButtonAmarillo text="OK" onClick={()=>setError(false)}/>
      </AlertaError>}
      {exito &&
      <AlertaExitosa text="Registro realizado exitosamente">
        <ButtonGreen text="Ver alimentos" onClick={()=>navigate("../alimentos")}/>
      </AlertaExitosa>}
    </>
  )
}

export default FormularioAlimentos