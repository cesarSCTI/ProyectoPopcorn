import React from 'react'
import Header from '../../Components/Header/Header'
import InfoVenta from './ComponentsVenta/InfoVenta'
import SeleccionarAsientos from './ComponentsVenta/SeleccionarAsientos'
import SeleccionarFuncion from './ComponentsVenta/SeleccionarFuncion'
import SeleccionarTipoBoleto from './ComponentsVenta/SeleccionarTipoBoleto'
import './ventaBoletos.css'
const VentaBoletosNuevo = () => {
  return (
    <>
        <Header Titulo={"Venta Boletos"} Subtitulo="nueva venta"/>
        <div className='Venta'>
            <div className='ventaLeft'>
                <SeleccionarFuncion />
                <SeleccionarAsientos />
                <SeleccionarTipoBoleto />
            </div>
            <div className='ventaRight'>
                <InfoVenta />
            </div>
        </div>
    </>
  )
}

export default VentaBoletosNuevo