import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonGreen } from '../../Components/Buttons/Buttons';
import Header from '../../Components/Header/Header'
import { useState, useEffect } from 'react';
import Load from '../../Components/Load/Load';
import './proveedores.css'

const ProveedoresIndex = () => {
    //Estados
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //Peticion
    const peticion = async () => {
        const response = await fetch('http://localhost:3050/proveedor')
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
            <Header Titulo={"Proveedores"} Subtitulo={"Todos los Proveedores"}>
                <Link to="nuevo"><ButtonGreen text={"Registrar nuevo Proveedor"} /></Link>
            </Header>
            <div className='contenedorTable'>
                <div className='d-12'>ID</div>
                <div className='d-24'>NOMBRE</div>
                <div className='d-24'>EMPRESA</div>
                <div className='d-24'>Correo</div>
                <div className='d-12'>ACCIÓN</div>
            </div>
            {loading
                ? <Load />
                : Data.map((data) =>
                    <div className='contenedorBody' key={data.ID_Proveedor}>
                        <div className='d-12-body'>{data.ID_Proveedor}</div>
                        <div className='d-24-body'>{data.Nombre}</div>
                        <div className='d-24-body'>{data.Empresa}</div>
                        <div className='d-24-body'>{data.Correo}</div>
                        <div className='d-12-button'><Link to={`${data.ID_Proveedor}`}>{/*<ButtonCoral text={"Prueba de ID"} />*/}Prueba id</Link></div>
                    </div>
                )
            }

        </>
    )
}

export default ProveedoresIndex