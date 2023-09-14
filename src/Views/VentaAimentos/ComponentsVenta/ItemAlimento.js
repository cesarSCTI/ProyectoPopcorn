import React, {useContext, useEffect, useState} from 'react'
import { VentaAlimentosContext } from '../../../Context/VentaAlimentosContext';

const ItemAlimento = ({item}) => {
const [Alimento, setAlimento] = useState([])
  const {fTotal, F_Agregar, venta} = useContext(VentaAlimentosContext)

  const Add = () =>{
    F_Agregar({...item, Cantidad:1})
  }

  useEffect(()=>{
    setAlimento(item)
  },[venta])

  return (
    <div className='itemAlimento' onClick={ Add }>
        <span className='NombreAlimento'>{item.Nombre}</span>
        <span>{item.Tamano}</span>
        <span>${item.Precio}</span>
    </div>
    
  )
}

export default ItemAlimento