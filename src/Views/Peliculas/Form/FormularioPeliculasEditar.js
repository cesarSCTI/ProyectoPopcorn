import React from 'react'
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import Load from '../../../Components/Load/Load';
import './formularioPelicula.css'

const FormularioPeliculasEditar = () => {
  const ID = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setformData] = useState({
    ID_Pelicula: `${ID.peliculaID}`,
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
  //Peticion de datos segun ID
  const Datos = async () => {
    const response = await fetch(`http://localhost:3050/pelicula/${ID.peliculaID}`)
    const data = await response.json().finally(() => setLoading(false))
    setformData({
      Nombre: `${data[0].Nombre}`,
      Descripcion: `${data[0].Descripcion}`,
      Genero: `${data[0].Genero}`,
      Portada: `${data[0].Portada}`
    })
  }
  //actualizamos la pelicula
  const actualizarPelicula = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if (validacion) {
      fetch(`http://localhost:3050/pelicula/${ID.peliculaID}`, {
        method: 'PATCH', // or 'PUT'
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .finally(() => setExito(true));
    }
    else {
      setError(true)
    }
  }

  const handleChange = (e) => { //obtenemos los datos del formulario
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {

    Datos();

  }, [])

  return (
    <>
      {loading
        ? <Load />
        :
        <form onSubmit={actualizarPelicula} onChange={handleChange}>
          <div className='contenedor-formulario-pelicula'>
            <div className='d-100'>
              <label className='labelPelicula'>nombre</label>
              <input type="text" className="inputTextPelicula" placeholder='Nombre de pelicula' name='Nombre' defaultValue={formData.Nombre} />
            </div>
            <div className='d-50'>
              <label className='labelPelicula'>genero</label>
              <input type="text" className="inputTextPelicula" placeholder='Genero de pelicula' name='Genero' defaultValue={formData.Genero} />
            </div>
            <div className='d-50'>
              <label className='labelPelicula' >url portada</label>
              <input type="text" className="inputTextPelicula" placeholder='www.popcorn.mx/media/titanic.jpg' name='Portada' defaultValue={formData.Portada} />
            </div>
            <div className='d-100'>
              <label className='labelPelicula'>descripción</label>
              <textarea className='textarea' name='Descripcion' defaultValue={formData.Descripcion}></textarea>
            </div>
            <div className='d-50'>
              <button className='btnGuardar'>Guardar</button>
            </div>
          </div>
        </form>
      }
      {error
        &&
        <AlertaError Text="Ha ocurrido un error">
          <ButtonAmarillo text="OK" onClick={() => setError(false)} />
        </AlertaError>
      }
      {exito &&
        <AlertaExitosa Text="Registro realizado exitosamente">
          <ButtonGreen text="Ver peliculas" onClick={() => navigate("../peliculas")} />
        </AlertaExitosa>
      }
    </>
  )
}

export default FormularioPeliculasEditar