import React from 'react'
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import { ButtonAmarillo } from '../../Components/Buttons/Buttons';
//import './ventaAlimentos.css';

const VentaBoletosIndex = () => {
  return (
    <>
      <Header Titulo={"Todas las ventas"}>
            <Link to="/venta-boletos"><ButtonAmarillo text={"Regresar"} /></Link>
        </Header>
        <div className='contenedorTable'>
            <div className='d-24'>ID venta</div>
            <div className='d-24'>FECHA</div>
            <div className='d-12'>TOTAL</div>
            <div className='d-24'>ID EMPLEADO</div>
            <div className='d-12'>ACCIÓN</div>
        </div>
            {/* Aqui tengo que hacer un mapping con la peticion a la api*/}
        <div className='contenedorBody'>
            <div className='d-24-body'>#000001</div>
            <div className='d-24-body'>2022-05-12</div>
            <div className='d-12-body'>$523</div>
            <div className='d-24-body'>xxx-xxx-xxx-xxx-x</div>
            <div className='d-12-button'><Link to="/venta-boletos/IdVentaInterior">{/*<ButtonCoral text={"Prueba de ID"} />*/}Detalles</Link></div>
        </div>
    </>
  )
}

export default VentaBoletosIndex