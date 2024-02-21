import React from 'react'
import "../css/TransportScreen.css"
import horarios from "../assets/horarios.jpg"

const TransportScreen = () => {
  return (
    <div className='text-center mt-2 mb-4'>
      <h2 className='mb-2'>Horarios de empresa San Pedro de Colalao</h2>
      <img className="img-responsive" src={horarios} alt="Horarios de empresa San Pedro de Colalao" />
    </div>
  )
}

export default TransportScreen
