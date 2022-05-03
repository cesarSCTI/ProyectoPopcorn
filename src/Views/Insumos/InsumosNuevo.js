import React from 'react'
import FormularioInsumo from './Form/FormularioInsumo'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import { useState, useEffect } from 'react'
import Load from '../../Components/Load/Load'

const InsumoNuevo = () => {
    //Declaramos nuestros estados
const [ultimoID, setUltimoID]= useState([]);
const [loading, setLoading]= useState(true)
const [iD, setID] = useState(0)

//Hacemos la peticion para buscar el ultimo ID y crear el nuevo
  const UltimoIDPeticion = async () =>{
    const response = await fetch('http://localhost:3050/insumo_id_ultimo')
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
            <Header Titulo={"Insumo"} Subtitulo={`${iD}`}>
                <Link to="/insumos"><ButtonCoral text={"Cancelar"}/></Link>
            </Header>
            <FormularioInsumo idInsumo={iD}/>
            </>
    }
    </>
  )
}

export default InsumoNuevo