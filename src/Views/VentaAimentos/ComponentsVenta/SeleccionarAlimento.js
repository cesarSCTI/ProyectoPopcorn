import React, {useState, useEffect} from 'react'
import Load from '../../../Components/Load/Load';
import ItemAlimento from './ItemAlimento';
import './venta.css';

const SeleccionarAlimento = () => {
  const [alimento, setAlimento] = useState([])
  const [loading, setLoading] = useState(true)

  const Getdata =  async () =>{
   const response = await fetch('http://localhost:3050/alimento')
   const data = await response.json().finally(()=>{
     setLoading(false)
    })
    setAlimento(data)
  } 
 
useEffect(()=>{
  Getdata();
},[])

  return (
    <>
        <div className='contenedor-venta'>
        {loading 
        ? <Load />
        : alimento.map( (ele)=> <ItemAlimento item={ele} key={ele.ID_Alimento} /> )}
        </div>
    </>
  )
}

export default SeleccionarAlimento