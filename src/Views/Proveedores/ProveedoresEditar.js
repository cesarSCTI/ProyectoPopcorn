import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormularioProveedoresEditar from './Form/FormularioProveedoresEditar'
import AlertaWarning from '../../Components/Alertas/AlertaWarning'

const ProveedoresEditar = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [alerta, setAlerta] = useState(false);
  
  const eliminarProveedor = () => {
    fetch(`http://localhost:3050/proveedor/${parametro.proveedorID}`, {
      method: 'Delete', // or 'PUT'
      //body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>{
      navigate("../proveedores", { replace: true });
    })
  }
  return (
    <>
        <Header Titulo={"Proveedores"} Subtitulo={parametro.proveedorID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar" onClick={()=>setAlerta(true)}/>
        </Header>
        <FormularioProveedoresEditar />
        {
          alerta && 
          <AlertaWarning Text="¿Deseas eliminar este proveedor?">
            <ButtonAmarillo text="Cancelar"  onClick={()=>setAlerta(false)}/>
            <ButtonCoral text="Eliminar" onClick={()=>eliminarProveedor()}/>
          </AlertaWarning>
        }
    </>
  )
}

export default ProveedoresEditar