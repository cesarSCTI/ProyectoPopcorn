import React from 'react'
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import AlertaError from '../../../Components/Alertas/AlertaError';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import Load from '../../../Components/Load/Load';

const FormularioProveedoresEditar = () => {
    const ID = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [exito,setExito] = useState(false);
    const [error,setError] = useState(false);
    const [formData, setformData] = useState({
      ID_Proveedor: `${ID.proveedorID}`,
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
  
    //Peticion de datos segun ID
    const Datos = async () =>{
        const response = await fetch(`http://localhost:3050/proveedor/${ID.proveedorID}`)
        const data = await response.json().finally(()=>setLoading(false))
        setformData({
          Nombre: `${data[0].Nombre}`,
          Empresa: `${data[0].Empresa}`,
          Correo: `${data[0].Correo}`
        })
    }
    //Creamos el Proveedor
    const actualizarProveedor = async (e) => { // generamos la orden 
        e.preventDefault()
        const validacion = await Schema.isValid(formData)
        if(validacion){
          fetch(`http://localhost:3050/proveedor/${ID.proveedorID}`, {
          method: 'PATCH', // or 'PUT'
          body: JSON.stringify(formData), 
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
    }
    
    useEffect( ()=>{

        Datos();
         
    }, [])
    return (
      <>
      {loading
              ? <Load />
              : 
                <form onSubmit={actualizarProveedor} on onChange={handleChange}>
                <div className='contenedor'>
                    <div className='d-100'>
                    <label className='labelAlimento'>nombre</label>
                    <input type="text" className="inputTextAlimento" placeholder='nombre Proveedores' name='Nombre' defaultValue={formData.Nombre}/>
                    </div>
                    <div className='d-50'>
                    <label className='labelAlimento'>Correo</label>
                    <input type="email" className="inputTextAlimento" placeholder='ejemplo@ejemplo.com' name='Correo' defaultValue={formData.Correo} />
                    </div>
                    <div className='d-50'>
                    <label className='labelAlimento' >empresa</label>
                    <input type="text" className="inputTextAlimento" placeholder='empresa sa de cv' name='Empresa' defaultValue={formData.Empresa} />
                    </div>
                    <div className='d-50'>
                    <button className='btnGuardar'>Guardar</button>
                    </div>
                </div>
                </form>
            }
                {error
                &&
                <AlertaError Text="Ha ocurrido un error">
                    <ButtonAmarillo text="OK" onClick={() => setError(false)} />
                </AlertaError>}
                {exito &&
                <AlertaExitosa Text="Registro realizado exitosamente">
                    <ButtonGreen text="Ver proveedores" onClick={() => navigate("../proveedores")} />
                </AlertaExitosa>}
      </>
    )
}

export default FormularioProveedoresEditar