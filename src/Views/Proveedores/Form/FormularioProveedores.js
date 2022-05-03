import React from 'react'
import { useState, useParams } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import './formularioProveedores.css'

const FormularioProveedores = ({ idProveedor }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
    ID_Proveedor: `${idProveedor}`,
    Nombre: '',
    Empresa: '',
    Correo: ''
  })
  //VALIDACION DE FORMULARIO
  let Schema = yup.object().shape({
    Nombre: yup.string().required('campo obligatorio'),
    Empresa: yup.string().required('campo obligatorio'),
    Correo: yup.string().required('campo obligatorio').email(),
  });

  //Creamos el Proveedor
  const createProveedor = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if (validacion) {
      fetch('http://localhost:3050/proveedor', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .finally(() => {
          setExito(true);
        })
    }
    else {
      setError(true);
    }
  }

  const handleChange = (e) => { //obtenemos los datos del formulario
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <form onSubmit={createProveedor} on onChange={handleChange}>
        <div className='contenedor'>
          <div className='d-100'>
            <label className='labelAlimento'>nombre</label>
            <input type="text" className="inputTextAlimento" placeholder='nombre Proveedores' name='Nombre' />
          </div>
          <div className='d-50'>
            <label className='labelAlimento'>Correo</label>
            <input type="email" className="inputTextAlimento" placeholder='ejemplo@ejemplo.com' name='Correo' />
          </div>
          <div className='d-50'>
            <label className='labelAlimento' >empresa</label>
            <input type="text" className="inputTextAlimento" placeholder='empresa sa de cv' name='Empresa' />
          </div>
          <div className='d-50'>
            <button className='btnGuardar'>Guardar</button>
          </div>
        </div>
      </form>
      {error
        &&
        <AlertaError Text="Ha ocurrido un error">
          <ButtonAmarillo text="OK" onClick={() => setError(false)} />
        </AlertaError>}
      {exito &&
        <AlertaExitosa Text="Registro realizado exitosamente">
          <ButtonGreen text="Ver alimentos" onClick={() => navigate("../proveedores")} />
        </AlertaExitosa>}
    </>
  )
}

export default FormularioProveedores