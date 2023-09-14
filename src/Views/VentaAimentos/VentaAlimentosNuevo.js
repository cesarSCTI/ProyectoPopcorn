import React from 'react'
import Header from '../../Components/Header/Header'
import InfoVenta from './ComponentsVenta/InfoVenta'
import SeleccionarAlimento from './ComponentsVenta/SeleccionarAlimento'
import './ventaAlimentos.css'

const VentaAlimentosNuevo = () => {
/*const {venta, F_Agregar} = useContext(VentaAlimentosContext)
  useEffect(()=>{
    F_Agregar()
  },[])*/
  return (
    <>
        <Header Titulo={"Venta Alimentos"} Subtitulo="nueva venta"/>
        <div className='Venta'>
            <div className='ventaLeft'><SeleccionarAlimento /></div>
            <div className='ventaRight'><InfoVenta /></div>
        </div>
    </>
  )
}

export default VentaAlimentosNuevo