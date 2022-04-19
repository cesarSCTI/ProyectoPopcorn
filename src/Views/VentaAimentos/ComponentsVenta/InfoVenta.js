import React from 'react'
import { ButtonCoral } from '../../../Components/Buttons/Buttons'
import './venta.css'
const InfoVenta = () => {
  return (
    <>
    <div className='info-id'>
      <p>venta: #0000000</p>
    </div>
    <div className='info-alimentos'>
      {/*Aqui va el map del contexto */}
      <div className='info-alimentos-item'>
        <span>haburguesa</span>
        <span>x2</span>
        <span>$30</span>
      </div>
      
    </div>
    <div className='info-total'>
      <span>TOTAL</span>
      <span>$50.00</span>
    </div>
      <div className='Info-pagos'>
        <ButtonCoral text={"Efectivo"} />
        <ButtonCoral text={"Tarjeta"} />
      </div>
    </>
  )
}

export default InfoVenta