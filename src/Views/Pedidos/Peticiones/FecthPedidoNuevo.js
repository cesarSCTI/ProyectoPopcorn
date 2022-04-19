import React from 'react'
import { ButtonAmarillo } from '../../../Components/Buttons/Buttons'
import './fetch.css'

const FecthPedidoNuevo = () => {
    /*
    Aqui tenemos que hacer la peticion y que nos renderice un formulario
    por cada stock en 0 => por medio de un mapping
    */
  return (
    <>
    <div className='contenedor-fetch'>
            <div className='d-quarter'>
                <label className='labelPedido'>Insumo</label>
            </div>
            <div className='d-quarter'>
                <label className='labelPedido'>Cantidad</label>
            </div>
            <div className='d-quarter'>
                <label className='labelPedido'>Tipo</label>
            </div>
            <div className='d-quarter'>
            </div>
        </div>
        <form>
        <div className='contenedor-pedido'>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <ButtonAmarillo text={"Agregar"} />
            </div>
        </div>
        </form>
        <form>
        <div className='contenedor-pedido'>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <ButtonAmarillo text={"Agregar"} />
            </div>
        </div>
        </form>
        <form>
        <div className='contenedor-pedido'>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <input type="text" className='inputPedido' />
            </div>
            <div className='d-quarter'>
                <ButtonAmarillo text={"Agregar"} />
            </div>
        </div>
        </form>
    </>
  )
}

export default FecthPedidoNuevo