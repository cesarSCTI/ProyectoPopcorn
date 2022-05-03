import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonGreen, ButtonAmarillo } from '../../../Components/Buttons/Buttons';
import './formularioInsumo.css'

const FormularioInsumo = ({idInsumo}) => {
  const navigate = useNavigate();
const [error, setError] = useState(false);
const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
    ID_Insumo: `${idInsumo}`,
    Nombre: '',
    Tipo_Insumo: '',
    Cantidad: ''
  })
  //VALIDACION DE FORMULARIO
  let Schema = yup.object().shape({
    Nombre: yup.string().required('campo obligatorio'),
    Tipo_Insumo: yup.string().required('campo obligatorio').min(1).max(2),
    Cantidad: yup.number().required('campo obligatorio').min(1),
  });

  //Creamos el Insumo
  const createInsumo = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if( validacion){
      fetch('http://localhost:3050/insumo', {
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
    <form onSubmit={createInsumo} onChange={handleChange}>
    <div className='contenedor'>
      <div className='d-50'>
        <label className='labelPelicula'>nombre</label>
        <input type="text" className="inputTextPelicula" placeholder='Nombre de insumo' name='Nombre'/>
      </div>
      <div className='d-25'>
        <label className='labelPelicula'>cantidad</label>
        <input type="text" className="inputTextPelicula" placeholder='cantidad de insumo' name='Cantidad'/>
      </div>
      <div className='d-25'>
        <label className='labelPelicula' >tipo</label>
        <input type="text" className="inputTextPelicula" placeholder='KG o L' name='Tipo_Insumo'/>
      </div>
      <div className='d-25'></div>
      <div className='d-50'>
        <button className='btnGuardar'>Guardar</button>
      </div>
      <div className='d-25'></div>
    </div>
    </form>
    {error 
      && 
      <AlertaError Text="Ha ocurrido un error">
        <ButtonAmarillo text="OK" onClick={()=>setError(false)}/>
      </AlertaError>}
      {exito &&
      <AlertaExitosa Text="Registro realizado exitosamente">
        <ButtonGreen text="Ver insumo" onClick={()=>navigate("../insumos")}/>
      </AlertaExitosa>}
    </>
  )
}

export default FormularioInsumo