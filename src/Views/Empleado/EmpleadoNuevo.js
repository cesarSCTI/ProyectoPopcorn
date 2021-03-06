import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCoral } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header';
import Load from '../../Components/Load/Load';
import {useState, useEffect} from 'react';
import FormEmpleado from './Form/FormEmpleado'

const EmpleadoNuevo = () => {
  return (
    <>
      <Header Titulo={"Nuevo Empleado"}>
        <Link to="/empleados"><ButtonCoral text={"Cancelar"} /></Link>
      </Header>
      <FormEmpleado />
    </>
  )
}

export default EmpleadoNuevo