import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardExplore from '../components/CardExplore'
import bombero from '../assets/bombero.webp'
import policia from '../assets/policia.webp'
import medico from '../assets/medico.webp'
import seguridad from '../assets/seguridad.webp'


const ServiceScreen = () => {
  const cardsData = [
    { titulo: 'Bomberos', contenido: "Por emergencias llamar al 0381 569-2310", boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/JTXkq9AAWnxuSNeP9", imagen: bombero},
    { titulo: 'Policia', contenido: 'Por emergencias llamar al 0381 438-8140', boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/Dzy5RKZha2xX7Qw6A", imagen: policia,},
    { titulo: 'Seguridad Municipal', contenido: 'Por emergencias llamar al 0381 568-1778', boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/SAZB9FdyTmmLMQRUA", imagen: seguridad},
    { titulo: 'Hospital', contenido: 'Por emergencias llamar al 107', imagen: medico, boton:"Ver Ubicación", ruta:"https://maps.app.goo.gl/xv6GoT7gFBB8mpkt7" } 
  ];
  return (
    <div>
      <div className="contenedor p-0 ps-3 pe-3 m-0 pb-3">
  <Row xs={1} md={4} className="g-2 mt-1 justify-content-between flex-wrap">
    {cardsData.map((card, idx) => (
      <Col key={idx} className="">
        <CardExplore
          titulo={card.titulo}
          imagen={card.imagen}
          contenido={card.contenido}
          boton={card.boton}
          ruta={card.ruta}
        />
      </Col>
    ))}
  </Row>
</div> 
    </div>
  )
}

export default ServiceScreen
