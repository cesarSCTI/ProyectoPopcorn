import React from 'react'
import './Buttons.css'

export const ButtonGreen = ({text, onClick}) => {
  return (
    <div className='btn btnGreen' onClick={onClick}>
    {text}
    </div>
  )
}
export const ButtonAmarillo = ({text, onClick}) => {
    return (
      <div className='btn btnAmarillo' onClick={onClick}>
      {text}
      </div>
    )
  }
  export const ButtonCoral = ({text, onClick}) => {
    return (
      <div className='btn btnCoral' onClick={onClick}>
      {text}
      </div>
    )
  }
  export const ButtonGris = ({text, onClick}) => {
    return (
      <div className='btn btnGris' onClick={onClick}>
      {text}
      </div>
    )
  }
  export const ButtonAzul = ({text, onClick}) => {
    return (
      <div className='btn btnAzul' onClick={onClick}>
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
  export const ButtonItemMenuVenta = ({children, text}) => {
    return (
      <div className='btn btnItemMenuVenta'>
      {children}
        <div className='NameItem'>{text}</div>
      </div>
    )
  }