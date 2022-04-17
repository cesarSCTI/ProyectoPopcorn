import React from 'react'
import FormularioInsumo from './Form/FormularioInsumo'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'

const InsumoNuevo = () => {
  return (
    <>
    <Header Titulo={"Insumo"} Subtitulo={"nuevo insumo "}>
        <Link to="/insumos"><ButtonCoral text={"Cancelar"}/></Link>
    </Header>
        <FormularioInsumo />
    </>
  )
}

export default InsumoNuevo