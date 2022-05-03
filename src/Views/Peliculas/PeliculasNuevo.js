import React from 'react'
import FormularioPelicula from './Form/FormularioPelicula'
import Header from '../../Components/Header/Header'
import Load from '../../Components/Load/Load'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import { useState, useEffect } from 'react'

const PeliculasNuevo = () => {
    //Declaramos nuestros estados
const [ultimoID, setUltimoID]= useState([]);
const [loading, setLoading]= useState(true)
const [iD, setID] = useState(0)

//Hacemos la peticion para buscar el ultimo ID y crear el nuevo
  const UltimoIDPeticion = async () =>{
    const response = await fetch('http://localhost:3050/pelicula_id_ultimo')
    const data = await response.json().finally(()=>setLoading(false))
    if(data.length < 0){}
    else{
      setUltimoID(data);
      const idd = await data[0].ID + 1
      setID(idd)
    }
  }
  useEffect(()=>{
    UltimoIDPeticion();
  },[])
  return (
    <>
      {loading  
              ? <Load/>
              : <>
                <Header Titulo={"Pelicula"} Subtitulo={`${iD}`}>
                    <Link to="/peliculas"><ButtonCoral text={"Cancelar"}/></Link>
                </Header>
                <FormularioPelicula idPelicula={iD}/>
                </>
      }
    </>
  )
}

export default PeliculasNuevo