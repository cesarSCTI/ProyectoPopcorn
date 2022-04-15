import React from 'react'
import Header from '../../Components/Header/Header'
import FormEmpleado from './Form/FormEmpleado'
import { useParams } from 'react-router-dom'
import { ButtonAmarillo, ButtonCoral } from '../../Components/Buttons/Buttons'

const EmpleadoEdit = () => {
  const parametro = useParams();
  return (
    <>
        <Header Titulo={"Empleado"} Subtitulo={parametro.empleadoID}>
          <ButtonAmarillo text="Editar" />
          <ButtonCoral text="Eliminar"/>
        </Header>
        <FormEmpleado/>
    </>
  )
}

export default EmpleadoEdit