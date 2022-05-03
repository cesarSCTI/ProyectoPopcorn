import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonAzul, ButtonGreen, ButtonAmarillo } from '../../Components/Buttons/Buttons'
import { useState, useEffect } from 'react'
import Load from '../../Components/Load/Load'
import './Insumos.css'

const InsumoIndex = () => {
  //Estados
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Peticion
  const peticion = async () => {
    const response = await fetch('http://localhost:3050/insumo')
    const data = await response.json().finally(() => setLoading(false))
    if (data.length === 0) {
      //console.log('sin datos')
    }
    else {
      setData(data);
    }
  }

  useEffect(() => {

    peticion();
  }, [])
  return (
    <>
      <Header Titulo={"Insumos"} Subtitulo={"Todas los insumos"}>
        <Link to="/pedidos/insumos"><ButtonAzul text={"Compra Insumos"} /></Link>
        <Link to="nuevo"><ButtonAmarillo text={"Buscar ID"} /></Link>
        <Link to="nuevo"><ButtonGreen text={"Registrar nuevo insumo"} /></Link>
      </Header>
      <div className='contenedorTable'>
        <div className='d-12'>ID</div>
        <div className='d-24'>NOMBRE</div>
        <div className='d-24'>CANTIDAD</div>
        <div className='d-12'>TIPO</div>
        <div className='d-24'>ACCIÓN</div>
      </div>
      {loading
        ? <Load />
        : Data.map((data) =>
          <div className='contenedorBody' key={data.ID_Insumo}>
            <div className='d-12-body'>{data.ID_Insumo}</div>
            <div className='d-24-body'>{data.Nombre}</div>
            <div className='d-24-body'>{data.Cantidad}</div>
            <div className='d-12-body'>{data.Tipo_Insumo}</div>
            <div className='d-24-button'><Link to={`${data.ID_Insumo}`}>Prueba id</Link></div>
          </div>
        )}
    </>
  )
}

export default InsumoIndex