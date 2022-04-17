import React from 'react'
import {Link} from 'react-router-dom';
import { ButtonGreen } from '../../Components/Buttons/Buttons';
import Header from '../../Components/Header/Header'
import './proveedores.css'

const ProveedoresIndex = () => {
  return (
    <>
        <Header Titulo={"Proveedores"} Subtitulo={"Todos los Proveedores"}>
            <Link to="nuevo"><ButtonGreen text={"Registrar nuevo Proveedor"} /></Link>
        </Header>
        <div className='contenedorTable'>
            <div className='d-12'>ID</div>
            <div className='d-24'>NOMBRE</div>
            <div className='d-24'>EMPRESA</div>
            <div className='d-24'>Correo</div>
            <div className='d-12'>ACCIÓN</div>
        </div>
            {/* Aqui tengo que hacer un mapping con la peticion a la api*/}
        <div className='contenedorBody'>
            <div className='d-12-body'>RFC</div>
            <div className='d-24-body'>NOMBRE</div>
            <div className='d-24-body'>ESTADO</div>
            <div className='d-24-body'>NACIMIENTO</div>
            <div className='d-12-button'><Link to="IdProveedoresInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
        </div>
    </>
  )
}

export default ProveedoresIndex