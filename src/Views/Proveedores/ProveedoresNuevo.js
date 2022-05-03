import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import { Link } from 'react-router-dom'
import FormularioProveedores from './Form/FormularioProveedores'
import { useState, useEffect } from 'react'
import Load from '../../Components/Load/Load'

const ProveedoresNuevo = () => {
  //Declaramos nuestros estados
  const [ultimoID, setUltimoID] = useState([]);
  const [loading, setLoading] = useState(true)
  const [iD, setID] = useState(0)

  //Hacemos la peticion para buscar el ultimo ID y crear el nuevo
  const UltimoIDPeticion = async () => {
    const response = await fetch('http://localhost:3050/proveedor_id_ultimo')
    const data = await response.json().finally(() => setLoading(false))
    if (data.length < 0) { }
    else {
      setUltimoID(data);
      const idd = await data[0].ID + 1
      setID(idd)
    }
  }
  useEffect(() => {
    UltimoIDPeticion();
  }, [])
  return (
    <>
      {loading
        ? <Load />
        : <>
          <Header Titulo={"Nuevo Proveedor"} Subtitulo={`${iD}`}>
            <Link to="/proveedores"><ButtonCoral text={"Cancelar"} /></Link>
          </Header>
          <FormularioProveedores idProveedor={iD} />
        </>
      }
    </>
  )
}

export default ProveedoresNuevo