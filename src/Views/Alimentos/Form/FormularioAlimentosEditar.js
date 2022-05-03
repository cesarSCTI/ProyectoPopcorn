import React from 'react'
import './formularioAlimentos.css'
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../Components/Load/Load';
import AlertaExitosa from '../../../Components/Alertas/AlertaExitosa';
import { ButtonAmarillo, ButtonGreen } from '../../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import AlertaError from '../../../Components/Alertas/AlertaError';


const FormularioAlimentosEditar = ({EstadoForm}) => {
    const ID = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [exito,setExito] = useState(false);
    const [error,setError] = useState(false);
    const [formData, setformData] = useState({
      ID_Alimento: `${ID.alimentoID}`,
      Nombre: ``,
      Precio: ``,
      Tamano: ``,
      Stock: ``
    })

    //Objeto para validar
    let Schema = yup.object().shape({
      Nombre: yup.string().required('campo obligatorio'),
      Precio: yup.number().required('campo obligatorio').min(0),
      Tamano: yup.string().required('campo obligatorio').min(1).max(2),
      Stock: yup.number().required('campo obligatorio').min(0)
    });

    //Peticion de datos segun ID
    const Datos = async () =>{
        const response = await fetch(`http://localhost:3050/alimento/${ID.alimentoID}`)
        const data = await response.json().finally(()=>setLoading(false))
        setformData({
          Nombre: `${data[0].Nombre}`,
          Precio: `${data[0].Precio}`,
          Tamano: `${data[0].Tamano}`,
          Stock: `${data[0].Stock}`
        })
    }
      //Funcion para actualizar alimento
      const actualizarAlimento = async (e) => { // generamos la orden 
        e.preventDefault()
        const validacion = await Schema.isValid(formData)
        if(validacion){
          fetch(`http://localhost:3050/alimento/${ID.alimentoID}`, {
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
    
      //Registro de cambios segun el input
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
                <form onSubmit={actualizarAlimento} onChange={handleChange} key={formData.ID_Alimento}>
                    <div className='contenedor'>
                        <div className='d-50'>
                        <label className='labelAlimento'>nombre</label>
                        <input type="text" className="inputTextAlimento" placeholder='nombre alimento' name='Nombre' defaultValue={formData.Nombre}/>
                        </div>
                        <div className='d-25'>
                        <label className='labelAlimento'>Precio</label>
                        <input type="text" className="inputTextAlimento" placeholder='50.0' name='Precio' defaultValue={formData.Precio}/>
                        </div>
                        <div className='d-25'>
                        <label className='labelAlimento' >tamaño</label>
                        <input type="text" className="inputTextAlimento" placeholder='G o M o CH' name='Tamano' defaultValue={formData.Tamano}/>
                        </div>
                        <div className='d-25'>
                        <label className='labelAlimento'>Stock</label>
                        <input type="text" className="inputTextAlimento" placeholder='100' name='Stock' defaultValue={formData.Stock}/>
                        </div>
                        <div className='d-50'>
                        <button className='btnGuardar'>Guardar</button>
                        </div>
                    </div>
                </form>
              
          }
          {exito &&
          <AlertaExitosa Text="Información modificada correctamente">
            <ButtonGreen text="Ver alimentos" onClick={()=>navigate("../alimentos")}/>
          </AlertaExitosa>}
          {error &&
          <AlertaError Text="ah ocurrido algun error">
            <ButtonAmarillo text="ok" onClick={()=>setError(false)}/>
          </AlertaError>}
          </>
      )
}

export default FormularioAlimentosEditar