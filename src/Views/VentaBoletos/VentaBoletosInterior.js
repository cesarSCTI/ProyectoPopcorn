import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { ButtonAmarillo, ButtonCoral, ButtonGreen } from '../../Components/Buttons/Buttons';
import './ventaBoletos.css'
const VentaBoletosInterior = () => {
    const parametro = useParams();
  return (
    <>
        <Header Titulo={"Venta"} Subtitulo={parametro.ventaID}>
            <Link to="/venta-boletos/todas-las-ventas"><ButtonAmarillo text="Regresar" /></Link>
            <ButtonCoral text={"Eliminar"} />
        </Header>
        <div className='contenedor-boletos-interior'>
            <div className='d-50'>
                <p>vendedor</p>
                <div className='dataVenta'></div>
            </div>
            <div className='d-100'>
                <p>boletos</p>
                <div className='p-cont-venta'>
                    <div className='p-item-venta'>Estudiante</div>
                    <div className='p-item-venta'>X5</div>
                    <div className='p-item-venta'>$123.00</div>
                    <div className='p-item-venta'>adulto</div>
                    <div className='p-item-venta'>X5</div>
                    <div className='p-item-venta'>$123.00</div>
                    <div className='p-item-venta'>Infantil</div>
                    <div className='p-item-venta'>X5</div>
                    <div className='p-item-venta'>$123.00</div>
                </div>
            </div>
            <div className='d-50'>
                <p>funcion</p>
                <div className='dataVenta'></div>
            </div>
            <div className='d-50'>
                <p>pelicula</p>
                <div className='dataVenta'></div>
            </div>
            <div className='d-50'></div>
            <div className='d-50'>
                <ButtonGreen text={"Guardar"} />
            </div>
        </div>
    </>
  )
}

export default VentaBoletosInterior