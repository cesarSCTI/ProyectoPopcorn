import React from 'react'
import './Alert.css';


const AlertaWarning = ({Text}) => {
  return (
    <div className='AlertContent'>
    <div className='Alert'>
        <div className='circleAmarillo'><i class='bx bx-error-circle'></i></div>
        <p className='info'>{Text}</p>
    </div>
</div>
  )
}

export default AlertaWarning