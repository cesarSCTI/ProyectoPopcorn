import React from 'react'
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../Components/Load/Load';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';

const FormularioInsumoEditar = () => {
    const ID = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
    ID_Insumo: ``,
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

//Peticion de datos segun ID
const Datos = async () =>{
    const response = await fetch(`http://localhost:3050/insumo/${ID.insumoID}`)
    const data = await response.json().finally(()=>setLoading(false))
    setformData({
      Nombre: `${data[0].Nombre}`,
      Tipo_Insumo: `${data[0].Tipo_Insumo}`,
      Cantidad: `${data[0].Cantidad}`
    })
}
  //Creamos el Insumo
  const actualizarInsumo = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if(validacion){
      fetch(`http://localhost:3050/insumo/${ID.insumoID}`, {
      method: 'PATCH', // or 'PUT'
      body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>setExito(true));
    }
    else{
      setError(true)
    }
  }

  const handleChange = (e) => { //obtenemos los datos del formulario
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect( ()=>{

    Datos();
     
}, [])
  return (
    <>
          {loading
              ? <Load />
              : 
                <form onSubmit={actualizarInsumo} onChange={handleChange}>
                <div className='contenedor'>
                <div className='d-50'>
                    <label className='labelPelicula'>nombre</label>
                    <input type="text" className="inputTextPelicula" placeholder='Nombre de insumo' name='Nombre' defaultValue={formData.Nombre}/>
                </div>
                <div className='d-25'>
                    <label className='labelPelicula'>cantidad</label>
                    <input type="text" className="inputTextPelicula" placeholder='cantidad de insumo' name='Cantidad' defaultValue={formData.Cantidad}/>
                </div>
                <div className='d-25'>
                    <label className='labelPelicula' >tipo</label>
                    <input type="text" className="inputTextPelicula" placeholder='KG o L' name='Tipo_Insumo' defaultValue={formData.Tipo_Insumo}/>
                </div>
                <div className='d-25'></div>
                <div className='d-50'>
                    <button className='btnGuardar'>Guardar</button>
                </div>
                <div className='d-25'></div>
                </div>
                </form>
          }
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

export default FormularioInsumoEditar