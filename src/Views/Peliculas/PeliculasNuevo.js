import React from 'react'
import FormularioPelicula from './Form/FormularioPelicula'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'

const PeliculasNuevo = () => {
  return (
    <>
    <Header Titulo={"Pelicula"} Subtitulo={"nueva pelicula"}>
        <Link to="/peliculas"><ButtonCoral text={"Cancelar"}/></Link>
    </Header>
        <FormularioPelicula />
    </>
  )
}

export default PeliculasNuevo