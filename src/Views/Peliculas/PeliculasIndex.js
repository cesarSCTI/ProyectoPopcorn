import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonGreen } from '../../Components/Buttons/Buttons'
import Load from '../../Components/Load/Load'
import { useState, useEffect } from 'react'
import './peliculas.css'

const PeliculasIndex = () => {
//Estados
const [Data, setData] = useState([]);
const [loading, setLoading] = useState(true);

//Peticiones
const peticion = async () =>{
  const response = await fetch('http://localhost:3050/pelicula')
  const data = await response.json().finally(()=>setLoading(false))
  if(data.length === 0){
    //console.log('sin datos')
  }
  else{
    setData(data);
  }
}

useEffect( ()=>{
  peticion();
}, [])

  return (
    <>
    <Header Titulo={"Peliculas"} Subtitulo={"Todas las peliculas"}>
        <Link to="nuevo"><ButtonGreen text={"Registrar nueva pelicula"}/></Link>
    </Header>
    <div className='contenedorTable'>
      <div className='d-24'>NOMBRE</div>
      <div className='d-24'>DESCRIPCIÓN</div>
      <div className='d-12'>GENERO</div>
      <div className='d-24'>URL PORTADA</div>
      <div className='d-12'>ACCIÓN</div>
    </div>
    {loading  
            ? <Load/>
            : Data.map((data)=>
              <div className='contenedorBody' key={data.ID_Pelicula}>
                <div className='d-24-body'>{data.Nombre}</div>
                <div className='d-24-body'>{data.Descripcion}</div>
                <div className='d-12-body'>{data.Genero}</div>
                <div className='d-24-body'>{data.Portada}</div>
                <div className='d-12-button'><Link to={`${data.ID_Pelicula}`}>Ver</Link></div>
              </div>
            )}
    </>
  )
}

export default PeliculasIndex