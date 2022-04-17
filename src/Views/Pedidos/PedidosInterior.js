import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { ButtonCoral, ButtonGris } from '../../Components/Buttons/Buttons';
import FetchPedido from './Peticiones/FetchPedido';
const PedidosInterior = () => {

const parametro = useParams();
    /*
    usar el parametro de la url para hacer la peticion a la api cuando se tenga lista 
    y mandarcelo como parametro a <FectchPedido />
    */
  return (
    <>
        <Header Titulo={"Pedido"} Subtitulo={parametro.pedidoID}>
            <Link to="/pedidos/insumos"><ButtonGris text={"Regresar"} /></Link>
            <ButtonCoral text={"Eliminar"} />
        </Header>
        <FetchPedido />
    </>
  )
}

export default PedidosInterior