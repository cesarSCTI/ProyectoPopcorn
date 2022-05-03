import React from 'react'
import './Alert.css';

const AlertaExitosa = ({Text, children}) => {
  return (
    <div className='AlertContent'>
        <div className='Alert'>
            <div className='circleGreen'><i className='bx bx-check'></i></div>
            <p className='info'>{Text}</p>
            <div className='botones'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AlertaExitosa