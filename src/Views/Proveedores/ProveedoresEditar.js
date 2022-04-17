import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'
import FormularioProveedores from './Form/FormularioProveedores'
import { useParams } from 'react-router-dom'

const ProveedoresEditar = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Proveedores"} Subtitulo={parametro.proveedorID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar"/>
        </Header>
        <FormularioProveedores/>
    </>
  )
}

export default ProveedoresEditar