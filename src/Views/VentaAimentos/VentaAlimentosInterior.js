import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons';

const VentaAlimentosInterior = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Venta"} Subtitulo={parametro.ventaID}>
            <Link to="/venta-alimentos/todas-las-ventas"><ButtonAmarillo text="Regresar" /></Link>
            <ButtonCoral text={"Eliminar"} />
        </Header>
        <div className='contenedor'>
            <div className='d-50'>
                <p>vendedor</p>
                <div className='dataVenta'></div>
            </div>
            <div className='d-100'>
                <p>articulos</p>
                <div className='p-cont-venta'>
                    <div className='p-item-venta'>Hambuerguesa ch</div>
                    <div className='p-item-venta'>X5</div>
                    <div className='p-item-venta'>$200.00</div>
                    <div className='p-item-venta'>Hambuerguesa ch</div>
                    <div className='p-item-venta'>X5</div>
                    <div className='p-item-venta'>$200.00</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VentaAlimentosInterior