import React from 'react'
import { ButtonGreen } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import './funciones.css'

const FuncionesIndex = () => {
  return (
    <>
    <Header Titulo={"Funciones"} Subtitulo={"Todas las funciones"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nueva función"}/></Link>
    </Header>
    <div className='contenedorTable'>
      <div className='d-12'>ID</div>
      <div className='d-24'>PELICULA</div>
      <div className='d-12'>FECHA</div>
      <div className='d-12'>HORARIO</div>
      <div className='d-12'># DE SALA</div>
      <div className='d-24'>ACCIÓN</div>
    </div>
    {/* Aqui tengo que hacer un mapping con la peticion a la api*/}
    <div className='contenedorBody'>
      <div className='d-12-body'>RFC</div>
      <div className='d-24-body'>NOMBRE</div>
      <div className='d-12-body'>ESTADO</div>
      <div className='d-12-body'>NACIMIENTO</div>
      <div className='d-12-body'>TELEFONO</div>
      <div className='d-24-button'><Link to="IdInsumoInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
    </div>
    </>
  )
}

export default FuncionesIndex