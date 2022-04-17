import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonAmarillo, ButtonAzul } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import './pedidos.css'

const PedidosIndex = () => {
  return (
    <>
        <Header Titulo={"Pedidos"} Subtitulo={"Todos los pedidos"}>
            <Link to="/proveedores"><ButtonAmarillo text={"Proveedores"} /></Link>
            <Link to="nuevo"><ButtonAzul text={"Crear Pedido"} /></Link>
        </Header>
    <div className='contenedorTable'>
      <div className='d-12'>ID</div>
      <div className='d-74'>FECHA</div>
      <div className='d-24'>ACCIÓN</div>
    </div>
    <div className='contenedorBody'>
      <div className='d-12-body'>#001</div>
      <div className='d-74-body'>2022-05-20</div>
      <div className='d-24-button'><Link to="IdPedidoInterior">Prueba id</Link></div>
    </div>
    </>
  )
}

export default PedidosIndex