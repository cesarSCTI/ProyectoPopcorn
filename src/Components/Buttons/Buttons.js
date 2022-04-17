import React from 'react'
import './Buttons.css'

export const ButtonGreen = ({text}) => {
  return (
    <div className='btn btnGreen'>
    {text}
    </div>
  )
}
export const ButtonAmarillo = ({text}) => {
    return (
      <div className='btn btnAmarillo'>
      {text}
      </div>
    )
  }
  export const ButtonCoral = ({text}) => {
    return (
      <div className='btn btnCoral'>
      {text}
      </div>
    )
  }
  export const ButtonGris = ({text}) => {
    return (
      <div className='btn btnGris'>
      {text}
      </div>
    )
  }
  export const ButtonAzul = ({text}) => {
    return (
      <div className='btn btnAzul'>
      {text}
      </div>
    )
  }
  export const ButtonItemMenu = ({children, text}) => {
    return (
      <div className='btn btnItemMenu'>
      {children}
        <div className='NameItem'>{text}</div>
      </div>
    )
  }
