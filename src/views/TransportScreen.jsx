import React from 'react'
import { Link } from 'react-router-dom'
import "../css/TransportScreen.css"
import horarios from "../assets/horarios.webp"

const TransportScreen = () => {
  return (
    <div className='text-center mt-2 mb-4'>
      <h2 className='mb-2'>Horarios de empresa San Pedro de Colalao</h2>
      <img className="img-responsive" src={horarios} alt="Horarios de empresa San Pedro de Colalao" />
      <h6 className='mb-1 mt-2'>*Horarios sujetos a modificación por parte de la empresa de transporte, mas info en <Link>https://es-la.facebook.com/empresasanpedrodecolalao</Link></h6>
    </div>
  )
}

export default TransportScreen
