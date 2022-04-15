import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import { Link } from 'react-router-dom'
import FormularioAlimentos from './Form/FormularioAlimentos'

const AlimentosNuevo = () => {
  return (
    <>
        <Header Titulo={"Nuevo Alimento"}>
            <Link to="/alimentos"><ButtonCoral text={"Cancelar"}/></Link>
        </Header>
        <FormularioAlimentos/>
    </>
  )
}

export default AlimentosNuevo