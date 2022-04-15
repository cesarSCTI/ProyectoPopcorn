import React from 'react'
import Header from '../../Components/Header/Header';
import {ButtonGreen} from '../../Components/Buttons/Buttons';
import { Link} from 'react-router-dom';
import './empleados.css'

const EmpleadoIndex = () => {
  return (
    <>
    <Header Titulo={"Empleados"} Subtitulo={"Todos los empleados"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nuevo empleado"} /></Link>
    </Header>
    
    <div className='contenedorTable'>
      <div className='d-12'>RFC</div>
      <div className='d-24'>NOMBRE</div>
      <div className='d-12'>ESTADO</div>
      <div className='d-12'>NACIMIENTO</div>
      <div className='d-12'>TELEFONO</div>
      <div className='d-12'>NSS</div>
      <div className='d-12'>ACCIÓN</div>
    {/*<Link to="IdEmpeladoInterior"><ButtonCoral text={"Prueba de ID"} /></Link>*/}
    </div>
    {/* Aqui tengo que hacer un mapping con la peticion a la api*/}
    <div className='contenedorBody'>
      <div className='d-12-body'>RFC</div>
      <div className='d-24-body'>NOMBRE</div>
      <div className='d-12-body'>ESTADO</div>
      <div className='d-12-body'>NACIMIENTO</div>
      <div className='d-12-body'>TELEFONO</div>
      <div className='d-12-body'>NSS</div>
      <div className='d-12-button'><Link to="IdEmpeladoInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
    </div>
    </>
  )
}

export default EmpleadoIndex