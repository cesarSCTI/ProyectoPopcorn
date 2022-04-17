import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonGreen } from '../../Components/Buttons/Buttons'
import './peliculas.css'

const PeliculasIndex = () => {
  return (
    <>
    <Header Titulo={"Peliculas"} Subtitulo={"Todas las peliculas"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nueva pelicula"}/></Link>
    </Header>
    <div className='contenedorTable'>
      <div className='d-24'>NOMBRE</div>
      <div className='d-24'>DESCRIPCIÓN</div>
      <div className='d-12'>GENERO</div>
      <div className='d-24'>URL PORTADA</div>
      <div className='d-12'>ACCIÓN</div>
    </div>
    <div className='contenedorBody'>
      <div className='d-24-body'>RFC</div>
      <div className='d-24-body'>NOMBRE</div>
      <div className='d-12-body'>ESTADO</div>
      <div className='d-24-body'>NACIMIENTO</div>
      <div className='d-12-button'><Link to="IdPeliculaInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
    </div>
    </>
  )
}

export default PeliculasIndex