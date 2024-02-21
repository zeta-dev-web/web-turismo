import React from 'react'
import trancas from "../assets/trancas2.png";

const CardTextApp = () => {
  return (
    <div className='text-center'>
        <img src={trancas} alt="trancas" width="380" className='img-fluid'/>
      <h6 className='ms-3 me-3 mt-2 text-start'>Trancas, en el corazón de las Cumbres Calchaquíes, te invita a descubrir un remanso de paz y belleza natural. Este destino te ofrece una experiencia única para conectar con la naturaleza, la historia y la cultura.<br/>

Déjate sorprender por las vistas panorámicas, los ríos y su gastronomía. Practica senderismo, cabalgatas, pesca o simplemente relájate en la tranquilidad del pueblo. Recorre la Villa Vieja de Trancas, conoce la Iglesia de Nuestra Señora del Rosario y participa de las tradiciones locales.<br/>

No te pierdas el Festival del Caballo, un evento único que reúne a jinetes de toda la región. Celebra las fiestas patronales con música, bailes y comidas típicas. Llévate un recuerdo único hecho a mano por los artesanos locales.<br/></h6><h5 className='ms-3 mt-1 text-start'>Trancas te espera para que vivas una experiencia inolvidable. Ven a descubrir este paraíso escondido en Tucumán.</h5>
    </div>
  )
}

export default CardTextApp

