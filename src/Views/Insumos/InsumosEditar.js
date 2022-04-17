import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { ButtonCoral, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import FormularioInsumo from './Form/FormularioInsumo'

const InsumoEditar = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Insumo"} Subtitulo={parametro.insumoID}>
            <ButtonAmarillo text="Editar" />
            <ButtonCoral text="Eliminar"/>
        </Header>
        <FormularioInsumo/>
    </>
  )
}

export default InsumoEditar