import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { ButtonCoral, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import FormularioPelicula from './Form/FormularioPelicula'

const PeliculaEditar = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Pelicula"} Subtitulo={parametro.peliculaID}>
            <ButtonAmarillo text="Editar" />
            <ButtonCoral text="Eliminar"/>
        </Header>
        <FormularioPelicula/>
    </>
  )
}

export default PeliculaEditar