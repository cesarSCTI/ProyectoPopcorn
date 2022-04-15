import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
const Home = () => {
  return (
    <div>
        <Header Titulo={"POPCORN TIME"} Subtitulo={"Bienvenido"} />
        <div className='Home'>
            <p>Bienvenido</p>
        </div>
    </div>
  )
}

export default Home