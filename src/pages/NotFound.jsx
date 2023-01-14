import React from 'react'
import '../styles/NotFound.scss'
import { HomeButton } from '../components/HomeButton'
const NotFound = () => {
  return (
    <div className='error-container'>
      <h1> Error 404</h1>
      <p>Pagina no encontrada.</p>
      <HomeButton />
    </div>
  )
}

export { NotFound }