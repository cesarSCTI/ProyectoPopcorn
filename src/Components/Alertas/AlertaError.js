import React from 'react'
import './Alert.css';

const AlertaError = ({Text, children}) => {
  return (
    <div className='AlertContent'>
        <div className='Alert'>
            <div className='circleRed'><i className='bx bx-error-circle'></i></div>
            <p className='info'>{Text}</p>
            <div className='botones'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AlertaError