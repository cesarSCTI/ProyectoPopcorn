import React from 'react'
import './Header.css';

const Header = ({children, Titulo, Subtitulo}) => {
  return (
    <div className='Header'>
      <div className='TextoContent'><span className='Titulo'>{Titulo} </span><span className='SubTitulo'> {Subtitulo}</span></div>
        <div className='Botones'> 
          {children}
        </div>
    </div>
  )
}

export default Header