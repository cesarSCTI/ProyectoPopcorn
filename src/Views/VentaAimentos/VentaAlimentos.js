import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import './ventaAlimentos.css'

const VentaAlimentos = () => {
  return (
      <>
        <Header Titulo={"Venta Alimentos"}>
            <Link to="todas-las-ventas"><ButtonCoral text={"Todas las ventas"}/></Link>
            <Link to="nuevo"><ButtonCoral text={"Nueva venta"}/></Link>
        </Header>
        <div className='IndexVentaAlimentos'>
            <i className='bx bxs-bowl-rice' ></i>
            <h3>¿Que haremos hoy?</h3>
        </div>
    </>
  )
}

export default VentaAlimentos