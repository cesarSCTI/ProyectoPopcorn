import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import {ButtonItemMenu  } from '../Buttons/Buttons';
import './Aside.css'
const Aside = () => {
  return (
    <div className='Aside'>
        <Link to="/"><ButtonItemMenu text={"Inicio"}><i className='bx bxs-home'></i></ButtonItemMenu></Link>
        <Link to="/empleados"><ButtonItemMenu text={"Empleados"}><i className='bx bxs-user'></i></ButtonItemMenu></Link>
        <Link to="/alimentos"><ButtonItemMenu text={"Alimentos"}><i className='bx bxs-bowl-rice' ></i></ButtonItemMenu></Link>
        <Link to="/funciones"><ButtonItemMenu text={"Funciones"}><i className='bx bxs-calendar' ></i></ButtonItemMenu></Link>
        <Link to="/peliculas"><ButtonItemMenu text={"Peliculas"}><i className='bx bxs-movie' ></i></ButtonItemMenu></Link>
        <Link to="/insumos"><ButtonItemMenu text={"Insumos"}><i className='bx bxs-food-menu' ></i></ButtonItemMenu></Link>
        <Link to="/venta-alimentos"><ButtonItemMenu text={"Venta alimentos"}><i className='bx bx-money-withdraw' ></i> </ButtonItemMenu></Link>
        <ButtonItemMenu text={"Venta Boletos"}>
          <i className='bx bx-money-withdraw' ></i>
        </ButtonItemMenu>
        <Outlet/>
    </div>
  )
}

export default Aside