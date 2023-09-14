import React, { useState, createContext } from 'react'

export const VentaAlimentosContext = createContext([]);


const VentaAlimentosProvider = ({ children }) => {
  //Estado
  const [venta, setVenta] = useState([]);

  //Agregar alimento
  const F_Agregar = (item) => {
    if(F_isinVenta(item)){
      venta.map((ele)=>{
        if(item.Nombre == ele.Nombre){
          ele.Cantidad = ele.Cantidad + item.Cantidad
        }
      })
    }
    else{
      setVenta([...venta, item])
    }
  }
  //Buscar alimento
  const F_isinVenta = (item) => {
    return venta.some((elem) => elem.ID_Alimento === item.ID_Alimento);
  }

  //Generar total
  const fTotal = () => {
    return venta.reduce((acum, item) => acum = acum + (item.Precio * item.Cantidad), 0)
  }

  //Limpiar
  const F_limpiar = () => {
    setVenta([]);
  }


  return (
    <VentaAlimentosContext.Provider value={{
      venta,
      F_Agregar,
      fTotal,
      F_limpiar
    }}>
      {children}
    </VentaAlimentosContext.Provider>
  )
}

export default VentaAlimentosProvider