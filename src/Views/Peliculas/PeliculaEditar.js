import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ButtonCoral, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import FormularioPeliculasEditar from './Form/FormularioPeliculasEditar'
import AlertaWarning from '../../Components/Alertas/AlertaWarning'

const PeliculaEditar = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [alerta, setAlerta] = useState(false);
  
  const eliminarAlimento = () => {
    fetch(`http://localhost:3050/pelicula/${parametro.peliculaID}`, {
      method: 'Delete', // or 'PUT'
      //body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>{
      navigate("../peliculas");
    })
  }

  return (
    <>
        <Header Titulo={"Pelicula"} Subtitulo={parametro.peliculaID}>
            <ButtonAmarillo text="Editar" />
            <ButtonCoral text="Eliminar"  onClick={()=>setAlerta(true)}/>
        </Header>
        <FormularioPeliculasEditar/>
        {
          alerta && 
          <AlertaWarning Text="¿Deseas eliminar esta pelicula?">
            <ButtonAmarillo text="Cancelar"  onClick={()=>setAlerta(false)}/>
            <ButtonCoral text="Eliminar" onClick={()=>eliminarAlimento()}/>
          </AlertaWarning>
        }
    </>
  )
}

export default PeliculaEditar