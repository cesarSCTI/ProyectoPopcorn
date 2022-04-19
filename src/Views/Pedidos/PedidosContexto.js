import React from 'react'
import { ButtonCoral, ButtonGreen } from '../../Components/Buttons/Buttons'
import './pedidos.css'

const PedidosContexto = () => {
    /*
    Aqui consumiremos el contexto de pedido para hacer la peticion
    */
  return (
    <div className='enviar-content'>
        <div className='list'>
            <div className='l-item'>Maiz</div>
            <div className='l-item'>10KG</div>
            <div className='l-item-center'><ButtonCoral text={"x"} /></div>
        </div>
        <div className='list'>
            <div className='l-item'>Maiz</div>
            <div className='l-item'>10KG</div>
            <div className='l-item-center'><ButtonCoral text={"x"} /></div>
        </div>
        <div className='boton-pedido'>
            <ButtonGreen text={"Enviar Pedido"} />
        </div>
    </div>
  )
}

export default PedidosContexto