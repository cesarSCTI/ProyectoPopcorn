import React from 'react'
import {Link} from 'react-router-dom';
import { ButtonGreen } from '../../Components/Buttons/Buttons';
import Header from '../../Components/Header/Header'
import './alimentos.css'

const AlimentosIndex = () => {
  return (
    <>
        <Header Titulo={"Alimentos"} Subtitulo={"Todos los alimentos"}>
            <Link to="nuevo"><ButtonGreen text={"Registrar nuevo alimento"} /></Link>
        </Header>
        <div className='contenedorTable'>
            <div className='d-12'>ID</div>
            <div className='d-24'>NOMBRE</div>
            <div className='d-12'>PRECIO</div>
            <div className='d-12'>STOCK</div>
            <div className='d-12'>TAMAÑO</div>
            <div className='d-24'>ACCIÓN</div>
        </div>
            {/* Aqui tengo que hacer un mapping con la peticion a la api*/}
        <div className='contenedorBody'>
            <div className='d-12-body'>RFC</div>
            <div className='d-24-body'>NOMBRE</div>
            <div className='d-12-body'>ESTADO</div>
            <div className='d-12-body'>NACIMIENTO</div>
            <div className='d-12-body'>TELEFONO</div>
            <div className='d-24-button'><Link to="IdAlimentoInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
        </div>
    </>
  )
}

export default AlimentosIndex