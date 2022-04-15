import React from 'react'
import './Alert.css';

const AlertaExitosa = ({Text}) => {
  return (
    <div className='AlertContent'>
        <div className='Alert'>
            <div className='circleGreen'><i class='bx bx-check'></i></div>
            <p className='info'>{Text}</p>
        </div>
    </div>
  )
}

export default AlertaExitosa