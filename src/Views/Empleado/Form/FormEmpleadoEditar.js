import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import Load from '../../../Components/Load/Load';
import * as yup from "yup";

const FormEmpleadoEditar = () => {
    const ID = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);
    const [formData, setformData] = useState({
          RFC_empleado: `${ID.empleadoID}`,
          Nombre: ``,
          Direccion: ``,
          Estado: ``,
          Telefono: ``,
          FechaNacimiento: ``,
          NSS: ``
    })
    //VALIDACION DE FORMULARIO
    let Schema = yup.object().shape({
      //RFC_empleado: yup.string().required('campo obligatorio').min(13),
      Nombre: yup.string().required('campo obligatorio'),
      Direccion: yup.string().required('campo obligatorio'),
      Estado: yup.string().required('campo obligatorio'),
      Telefono: yup.number().required('campo obligatorio').min(10),
      FechaNacimiento: yup.string().required('campo obligatorio'),
      NSS: yup.string().required('campo obligatorio').min(11)
    });
      //Peticion de datos segun ID
      const Datos = async () =>{
        const response = await fetch(`http://localhost:3050/empleado/${ID.empleadoID}`)
        const data = await response.json().finally(()=>setLoading(false))
        setformData({
          RFC_empleado: `${data[0].RFC_empleado}`,
          Nombre: `${data[0].Nombre}`,
          Direccion: `${data[0].Direccion}`,
          Estado: `${data[0].Estado}`,
          Telefono: `${data[0].Telefono}`,
          FechaNacimiento: `${data[0].FechaNacimiento}`,
          NSS: `${data[0].NSS}`
        })
    }

    //Creamos el Alimento
    const actualizarEmpleado = async (e) => { // generamos la orden 
      e.preventDefault()
      const validacion = await Schema.isValid(formData)
      if(validacion){
        fetch(`http://localhost:3050/empleado/${ID.empleadoID}`, {
        method: 'PATCH', // or 'PUT'
        body: JSON.stringify(formData), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .finally(()=>setExito(true));
      }
      else{
        setError(true)
      }
    }
  
    const handleChange = (e) => { //obtenemos los datos del formulario
      setformData({
        ...formData,
        [e.target.name]: e.target.value
      })
      console.log(formData)
    }
    useEffect( ()=>{
      Datos();
  }, [])
    return (
      <>
      {loading
              ? <Load />
              : 
        <form onSubmit={actualizarEmpleado} onChange={handleChange}>
        <div className='contenedor'>
          <div className='d-25'>
            <label className='labelEmpleado'>RFC</label>
            <input disabled type="text" className="inputText" placeholder='xxx-xxx-xxx-xxx-x' name='RFC_empleado' defaultValue={formData.RFC_empleado}/>
          </div>
          <div className='d-25'>
            <label className='labelEmpleado'>NSS</label>
            <input type="text" className="inputText" placeholder='xxxxxxxxxxx' name='NSS'defaultValue={formData.NSS}/>
          </div>
          <div className='d-50'>
            <label className='labelEmpleado'>Nombre</label>
            <input type="text" className="inputText" placeholder='Nombre completo' name='Nombre' defaultValue={formData.Nombre}/>
          </div>
          <div className='d-50'>
            <label className='labelEmpleado'>Dirección</label>
            <input type="text" className="inputText" placeholder='Dirección de Empleado' name='Direccion' defaultValue={formData.Direccion}/>
          </div>
          <div className='d-25'>
            <label className='labelEmpleado'>Estado</label>
            <input type="text" className="inputText" placeholder='EX: Jalisco' name='Estado' defaultValue={formData.Estado}/>
          </div>
          <div className='d-25'>
            <label className='labelEmpleado'>Teléfono</label>
            <input type="text" className="inputText" placeholder='101-010-1010' name='Telefono' defaultValue={formData.Telefono}/>
          </div>
          <div className='d-25'>
            <label className='labelEmpleado'>Fecha Nacimiento</label>
            <input type="date" className="inputText" name='FechaNacimiento' defaultValue={formData.FechaNacimiento[0]+formData.FechaNacimiento[1]+formData.FechaNacimiento[2]+formData.FechaNacimiento[3]+formData.FechaNacimiento[4]+formData.FechaNacimiento[5]+formData.FechaNacimiento[6]+formData.FechaNacimiento[7]+formData.FechaNacimiento[8]+formData.FechaNacimiento[9]}/>
          </div>
          <div className='d-50'>
            <button className='btnGuardar'>Guardar</button>
          </div>
        </div>
        </form>
      }
        {error && 
          <AlertaError Text="Ha ocurrido un error">
            <ButtonAmarillo text="OK" onClick={()=>setError(false)}/>
          </AlertaError>
        }
        {exito &&
          <AlertaExitosa text="Registro actualizado exitosamente">
            <ButtonGreen text="Ver Empleados" onClick={()=>navigate("../empleados")}/>
          </AlertaExitosa>
        }
      </>
    )
}

export default FormEmpleadoEditar