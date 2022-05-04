import React from 'react'
import Header from '../../Components/Header/Header'
import FormEmpleadoEditar from './Form/FormEmpleadoEditar'
import {useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'
import AlertaWarning from '../../Components/Alertas/AlertaWarning';

const EmpleadoEdit = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [alerta, setAlerta] = useState(false);
  
  const eliminarAlimento = () => {
    fetch(`http://localhost:3050/empleado/${parametro.empleadoID}`, {
      method: 'Delete', // or 'PUT'
      //body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>{
      navigate("../empleados", { replace: true });
    })
  }
  return (
    <>
        <Header Titulo={"Empleado"} Subtitulo={parametro.empleadoID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar" onClick={()=>setAlerta(true)}/>
        </Header>
        <FormEmpleadoEditar/>
        {
          alerta && 
          <AlertaWarning Text="¿Deseas eliminar este empleado?">
            <ButtonAmarillo text="Cancelar"  onClick={()=>setAlerta(false)}/>
            <ButtonCoral text="Eliminar" onClick={()=>eliminarAlimento()}/>
          </AlertaWarning>
        }
    </>
  )
}

export default EmpleadoEdit