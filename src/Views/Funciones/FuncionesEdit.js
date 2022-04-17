import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { ButtonCoral, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import FormularioFuncion from './Form/FormularioFuncion'
const FuncionesEdit = () => {

  const parametro = useParams();

  return (
   <>
        <Header Titulo={"Funciones"} Subtitulo={parametro.funcionID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar"/>
        </Header>
        <FormularioFuncion/>
   </>
  )
}

export default FuncionesEdit