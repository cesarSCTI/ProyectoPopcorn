import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import * as yup from "yup";
import './FormEmpleado.css';

const FormEmpleado = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [formData, setformData] = useState({
        RFC_empleado: '',
        Nombre: '',
        Direccion: '',
        Estado: '',
        Telefono: '',
        FechaNacimiento: '',
        NSS: ''
  })
  //VALIDACION DE FORMULARIO
  let Schema = yup.object().shape({
    RFC_empleado: yup.string().required('campo obligatorio').min(13),
    Nombre: yup.string().required('campo obligatorio'),
    Direccion: yup.string().required('campo obligatorio'),
    Estado: yup.string().required('campo obligatorio'),
    Telefono: yup.number().required('campo obligatorio').min(10),
    FechaNacimiento: yup.string().required('campo obligatorio'),
    NSS: yup.string().required('campo obligatorio').min(11)
  });

  //Creamos el Alimento
  const createEmpleado = async (e) => { // generamos la orden 
    e.preventDefault()
    const validacion = await Schema.isValid(formData)
    if( validacion){
      fetch('http://localhost:3050/empleado', {
      method: 'POST',
      body: JSON.stringify(formData), 
      headers:{
        'Content-Type': 'application/json'
      }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .finally(()=>{
        setExito(true);
      })
    }
    else{
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
      <form onSubmit={createEmpleado} onChange={handleChange}>
      <div className='contenedor'>
        <div className='d-25'>
          <label className='labelEmpleado'>RFC</label>
          <input type="text" className="inputText" placeholder='xxx-xxx-xxx-xxx-x' name='RFC_empleado' />
        </div>
        <div className='d-25'>
          <label className='labelEmpleado'>NSS</label>
          <input type="text" className="inputText" placeholder='xxxxxxxxxxx' name='NSS'/>
        </div>
        <div className='d-50'>
          <label className='labelEmpleado'>Nombre</label>
          <input type="text" className="inputText" placeholder='Nombre completo' name='Nombre'/>
        </div>
        <div className='d-50'>
          <label className='labelEmpleado'>Dirección</label>
          <input type="text" className="inputText" placeholder='Dirección de Empleado' name='Direccion'/>
        </div>
        <div className='d-25'>
          <label className='labelEmpleado'>Estado</label>
          <input type="text" className="inputText" placeholder='EX: Jalisco' name='Estado'/>
        </div>
        <div className='d-25'>
          <label className='labelEmpleado'>Teléfono</label>
          <input type="text" className="inputText" placeholder='101-010-1010' name='Telefono'/>
        </div>
        <div className='d-25'>
          <label className='labelEmpleado'>Fecha Nacimiento</label>
          <input type="date" className="inputText" name='FechaNacimiento'/>
        </div>
        <div className='d-50'>
          <button className='btnGuardar'>Guardar</button>
        </div>
      </div>
      </form>
      {error && 
        <AlertaError Text="Ha ocurrido un error">
          <ButtonAmarillo text="OK" onClick={()=>setError(false)}/>
        </AlertaError>
      }
      {exito &&
        <AlertaExitosa text="Registro realizado exitosamente">
          <ButtonGreen text="Ver Empleado" onClick={()=>navigate("../empleados")}/>
        </AlertaExitosa>
      }
    </>
  )
}

export default FormEmpleado