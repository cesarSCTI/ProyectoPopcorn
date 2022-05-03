import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'
import {useParams,useNavigate } from 'react-router-dom';
import {useState} from 'react';
import FormularioAlimentosEditar from './Form/FormularioAlimentosEditar'
import AlertaWarning from '../../Components/Alertas/AlertaWarning';

const AlimentosEditar = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [alerta, setAlerta] = useState(false);
  
  const eliminarAlimento = () => {
    fetch(`http://localhost:3050/alimento/${parametro.alimentoID}`, {
      method: 'Delete', // or 'PUT'
      //body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>{
      navigate("../alimentos", { replace: true });
    })
  }

  return (
    <>
        <Header Titulo={"Alimentos"} Subtitulo={parametro.alimentoID}>
          <ButtonAmarillo text="Editar"/>
          <ButtonCoral text="Eliminar" onClick={()=>setAlerta(true)}/>
        </Header>
        <FormularioAlimentosEditar />
        {
          alerta && 
          <AlertaWarning Text="¿Deseas eliminar este alimento?">
            <ButtonAmarillo text="Cancelar"  onClick={()=>setAlerta(false)}/>
            <ButtonCoral text="Eliminar" onClick={()=>eliminarAlimento()}/>
          </AlertaWarning>
        }
    </>
  )
}

export default AlimentosEditar