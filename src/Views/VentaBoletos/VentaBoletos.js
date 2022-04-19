import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
const VentaBoletos = () => {
  return (
    <>
        <Header Titulo={"Venta Boletos"}>
            <Link to="todas-las-ventas"><ButtonCoral text={"Todas las ventas"}/></Link>
            <Link to="nuevo"><ButtonCoral text={"Nueva venta"}/></Link>
        </Header>
        <div className='IndexVentaAlimentos'>
            <i className='bx bxs-movie' ></i>
            <h3>¿Que haremos hoy?</h3>
        </div>
    </>
  )
}

export default VentaBoletos