import React from 'react'
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import './formularioPelicula.css'


const FormularioPelicula = ({idPelicula}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
      ID_Pelicula: `${idPelicula}`,
      Nombre: '',
      Descripcion: '',
      Genero: '',
      Portada: ''
    })
  //VALIDACION DE FORMULARIO
  let Schema = yup.object().shape({
    Nombre: yup.string().required('campo obligatorio'),
    Descripcion: yup.string().required('campo obligatorio'),
    Genero: yup.string().required('campo obligatorio'),
    Portada: yup.string().required('campo obligatorio')
  });

  //Creamos la pelicula
  const createPelicula = async (e) => { 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if( validacion ){
      fetch('http://localhost:3050/pelicula', {
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
    console.log(formData)
  }
  return (
    <>
    <form onSubmit={createPelicula} onChange={handleChange}>
    <div className='contenedor-formulario-pelicula'>
      <div className='d-100'>
        <label className='labelPelicula'>nombre</label>
        <input type="text" className="inputTextPelicula" placeholder='Nombre de pelicula' name='Nombre' />
      </div>
      <div className='d-50'>
        <label className='labelPelicula'>genero</label>
        <input type="text" className="inputTextPelicula" placeholder='Genero de pelicula' name='Genero' />
      </div>
      <div className='d-50'>
        <label className='labelPelicula' >url portada</label>
        <input type="text" className="inputTextPelicula" placeholder='www.popcorn.mx/media/titanic.jpg' name='Portada' />
      </div>
      <div className='d-100'>
        <label className='labelPelicula'>descripción</label>
        <textarea className='textarea' name='Descripcion'></textarea>
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
        <AlertaExitosa Text="Registro realizado exitosamente">
          <ButtonGreen text="Ver peliculas" onClick={()=>navigate("../peliculas")}/>
        </AlertaExitosa>}
      </>
  )
}

export default FormularioPelicula