import React from 'react'
import './venta.css'
import { ButtonCoral } from '../../../Components/Buttons/Buttons'
const InfoVenta = () => {
  return (
   <>
        <div className='info-id'>
          <p>venta: #0000000</p>
        </div>
        <div className='info-pelicula'>
          <span className='titulospan'>Pelicula</span>
          <div className='info-item'>
            <span>haburguesa</span>
            <span>x2</span>
            <span>$30</span>
          </div>
        </div>
        <div className='info-funcion'>
          <span className='titulospan'>Asientos</span>
          <div className='info-item'>
            <span>A-8, B-5, C-6</span>
          </div>
        </div>
        <div className='info-boletos'>
          <span className='titulospan'>Boletos</span>
          <div className='info-item'>
              <span>Infantil</span>
              <span>x2</span>
              <span>$30</span>
          </div>
          <div className='info-item'>
              <span>Adulto</span>
              <span>x2</span>
              <span>$30</span>
          </div>
          <div className='info-item'>
              <span>Estudiante</span>
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