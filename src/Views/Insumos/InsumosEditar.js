import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { ButtonCoral, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import FormularioInsumoEditar from './Form/FormularioInsumoEditar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AlertaWarning from '../../Components/Alertas/AlertaWarning'

const InsumoEditar = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [alerta, setAlerta] = useState(false);
  
  const eliminarAlimento = () => {
    fetch(`http://localhost:3050/insumo/${parametro.insumoID}`, {
      method: 'Delete', // or 'PUT'
      //body: JSON.stringify(formData), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally(()=>{
      navigate("../insumos", { replace: true });
    })
  }
  return (
    <>
        <Header Titulo={"Insumo"} Subtitulo={parametro.insumoID}>
            <ButtonAmarillo text="Editar" />
            <ButtonCoral text="Eliminar" onClick={()=>setAlerta(true)}/>
        </Header>
        <FormularioInsumoEditar />
        {
          alerta && 
          <AlertaWarning Text="¿Deseas eliminar este Insumo?">
            <ButtonAmarillo text="Cancelar"  onClick={()=>setAlerta(false)}/>
            <ButtonCoral text="Eliminar" onClick={()=>eliminarAlimento()}/>
          </AlertaWarning>
        }
    </>
  )
}

export default InsumoEditar