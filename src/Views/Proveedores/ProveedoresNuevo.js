import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import { Link } from 'react-router-dom'
import FormularioProveedores from './Form/FormularioProveedores'

const ProveedoresNuevo = () => {
  return (
    <>
        <Header Titulo={"Nuevo Alimento"}>
            <Link to="/proveedores"><ButtonCoral text={"Cancelar"}/></Link>
        </Header>
        <FormularioProveedores/>
    </>
  )
}

export default ProveedoresNuevo