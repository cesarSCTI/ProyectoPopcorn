import React from 'react'
import './fetch.css'

const FetchPedido = () => {
  return (
    <>
        <div className='contenedor'>
            <div className='d-50'>
                <p className='p-fecha'>Fecha venta</p>
                <div className='p-i-fecha'>2022-05-15</div>
            </div>
            <div className='d-100'>
                <p className='p-insumo'>insumos</p>
                <div className='p-cont-insumo'>
                    <div className='p-item-insumo'>Maiz</div>
                    <div className='p-item-insumo'>20KG</div>
                    <div className='p-item-insumo-center'>nombre@maiz.com</div>
                    <div className='p-item-insumo'>Maiz</div>
                    <div className='p-item-insumo'>20KG</div>
                    <div className='p-item-insumo-center'>nombre@maiz.com</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FetchPedido