import React from 'react'
import Header from '../../Components/Header/Header';
import { ButtonGreen } from '../../Components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Load from '../../Components/Load/Load';
import './empleados.css'

const EmpleadoIndex = () => {
  //Estados
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Peticion
  const peticion = async () => {
    const response = await fetch('http://localhost:3050/empleado')
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
      <Header Titulo={"Empleados"} Subtitulo={"Todos los empleados"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nuevo empleado"} /></Link>
      </Header>

      <div className='contenedorTable'>
        <div className='d-12'>RFC</div>
        <div className='d-24'>NOMBRE</div>
        <div className='d-12'>ESTADO</div>
        <div className='d-12'>NACIMIENTO</div>
        <div className='d-12'>TELEFONO</div>
        <div className='d-12'>NSS</div>
        <div className='d-12'>ACCIÓN</div>
      </div>
      {loading
        ? <Load />
        : Data.map((data) =>
          <div className='contenedorBody' key={data.RFC_empleado}>
            <div className='d-12-body'>{data.RFC_empleado}</div>
            <div className='d-24-body'>{data.Nombre}</div>
            <div className='d-12-body'>{data.Estado}</div>
            <div className='d-12-body'>{data.FechaNacimiento[0]+data.FechaNacimiento[1]+data.FechaNacimiento[2]+data.FechaNacimiento[3]+data.FechaNacimiento[4]+data.FechaNacimiento[5]+data.FechaNacimiento[6]+data.FechaNacimiento[7]+data.FechaNacimiento[8]+data.FechaNacimiento[9]}</div>
            <div className='d-12-body'>{data.Telefono}</div>
            <div className='d-12-body'>{data.NSS}</div>
            <div className='d-12-button'><Link to={`${data.RFC_empleado}`}>Ver Empleado</Link></div>
          </div>
        )
      }
    </>
  )
}

export default EmpleadoIndex