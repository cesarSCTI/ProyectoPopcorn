import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'
import FormularioAlimentos from './Form/FormularioAlimentos'
import { useParams } from 'react-router-dom'

const AlimentosEditar = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Alimentos"} Subtitulo={parametro.alimentoID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar"/>
        </Header>
        <FormularioAlimentos/>
    </>
  )
}

export default AlimentosEditar