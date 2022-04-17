import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonAzul, ButtonGreen, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import './Insumos.css'

const InsumoIndex = () => {
  return (
    <>
    <Header Titulo={"Insumos"} Subtitulo={"Todas los insumos"}>
        <Link to="/pedidos/insumos"><ButtonAzul text={"Compra Insumos"}/></Link>
        <Link to="nuevo"><ButtonAmarillo text={"Buscar ID"}/></Link>
        <Link to="nuevo"><ButtonGreen text={"Registrar nuevo insumo"}/></Link>
    </Header>
    <div className='contenedorTable'>
      <div className='d-12'>ID</div>
      <div className='d-24'>NOMBRE</div>
      <div className='d-24'>CANTIDAD</div>
      <div className='d-12'>TIPO</div>
      <div className='d-24'>ACCIÓN</div>
    </div>
    <div className='contenedorBody'>
      <div className='d-12-body'>1</div>
      <div className='d-24-body'>Maiz</div>
      <div className='d-24-body'>30</div>
      <div className='d-12-body'>KG</div>
      <div className='d-24-button'><Link to="IdInsumoInterior">Prueba id</Link></div>
    </div>
    </>
  )
}

export default InsumoIndex