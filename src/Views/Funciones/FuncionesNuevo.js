import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import FormularioFuncion from './Form/FormularioFuncion'
const FuncionesNuevo = () => {
  return (
      <>
    <Header Titulo={"Función"} Subtitulo={"nueva función"}>
        <Link to="/funciones"><ButtonCoral text={"Cancelar"}/></Link>
    </Header>
    <FormularioFuncion/>
    </>
  )
}

export default FuncionesNuevo