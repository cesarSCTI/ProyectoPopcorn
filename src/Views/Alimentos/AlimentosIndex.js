import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonGreen } from '../../Components/Buttons/Buttons';
import Header from '../../Components/Header/Header'
import './alimentos.css'
import { useEffect, useState } from 'react';
import Load from '../../Components/Load/Load';

const AlimentosIndex = () => {
  //Estados
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Peticion
  const peticion = async () => {
    const response = await fetch('http://localhost:3050/alimento')
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
      <Header Titulo={"Alimentos"} Subtitulo={"Todos los alimentos"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nuevo alimento"} /></Link>
      </Header>
      <div className='contenedorTable'>
        <div className='d-12'>ID</div>
        <div className='d-24'>NOMBRE</div>
        <div className='d-12'>PRECIO</div>
        <div className='d-12'>STOCK</div>
        <div className='d-12'>TAMAÑO</div>
        <div className='d-24'>ACCIÓN</div>
      </div>
      {loading
        ? <Load />
        : Data.map((data) =>
          <div className='contenedorBody' key={data.ID_Alimento}>
            <div className='d-12-body'>{data.ID_Alimento}</div>
            <div className='d-24-body'>{data.Nombre}</div>
            <div className='d-12-body'>{data.Precio}</div>
            <div className='d-12-body'>{data.Stock}</div>
            <div className='d-12-body'>{data.Tamano}</div>
            <div className='d-24-button'><Link to={`${data.ID_Alimento}`}>Ver</Link></div>
          </div>
        )
      }

    </>
  )
}

export default AlimentosIndex