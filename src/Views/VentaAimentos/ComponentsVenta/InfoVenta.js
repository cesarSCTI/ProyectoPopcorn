import React, {useContext, useEffect, useState} from 'react'
import { ButtonAmarillo, ButtonCoral } from '../../../Components/Buttons/Buttons'
import { VentaAlimentosContext } from '../../../Context/VentaAlimentosContext'
import './venta.css'

const InfoVenta = () => {
  const [total, setTotal] = useState(0);
  const {venta, fTotal, F_limpiar} = useContext(VentaAlimentosContext);

  useEffect(() => {
    setTotal(fTotal)
}, [fTotal])

  return (
    <>
    <div className='info-id'>
      <p>venta: #0000000</p> <ButtonAmarillo text='Cancelar venta'  onClick={()=>F_limpiar()} />
    </div>
    <div className='info-alimentos'>
      {/*Aqui va el map del contexto */}
        {venta.map((ele)=>
        <div key={ele.ID_Alimento} className='info-alimentos-item'>
          <span>{ele.Nombre}</span>
          <span>x{ele.Cantidad}</span>
          <span>${ele.Precio}</span>
        </div>
        )}
      
    </div>
    <div className='info-total'>
      <span>TOTAL</span>
      <span>${total}</span>
    </div>
      <div className='Info-pagos'>
        <ButtonCoral text={"Efectivo"} />
        <ButtonCoral text={"Tarjeta"} />
      </div>
    </>
  )
}

export default InfoVenta