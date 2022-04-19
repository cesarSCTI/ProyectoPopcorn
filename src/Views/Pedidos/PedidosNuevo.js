import React from 'react'
import Header from '../../Components/Header/Header'
import './pedidos.css'
import PedidosContexto from './PedidosContexto'
import FecthPedidoNuevo from './Peticiones/FecthPedidoNuevo'

const PedidosNuevo = () => {
  return (
    <>
        <Header Titulo={"Nuevo Pedido"} Subtitulo="Insumos" />
        <div className='Pedido-Nuevo-content'>
            <div className='col-select'>
                <FecthPedidoNuevo />
            </div>
            <div className='col-pedido'>
                <PedidosContexto />
            </div>
        </div>
    </>
  )
}

export default PedidosNuevo