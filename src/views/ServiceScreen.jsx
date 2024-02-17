import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardExplore from '../components/CardExplore'
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";


const ServiceScreen = () => {
  const cardsData = [
    { titulo: 'Bomberos', contenido: "Por emergencias llamar al 0381 569-2310", boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/FwJJM8vUXpEh8sAz9", imagen:"https://www.eltucumano.com/fotos/notas/2021/07/23/210723191935_48911.jpg"},
    { titulo: 'Policia', contenido: 'Por emergencias llamar al 0381 438-8140', icono: <MdFoodBank size={35}/>, boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/mCJ6WKQLajmSqBnc9"},
    { titulo: 'Cuerpo de Seguridad Municipal', contenido: 'Por emergencias llamar al 0381 568-1778', icono: <MdFoodBank size={35}/>, boton:"Ver Ubicación", ruta: "https://maps.app.goo.gl/FyDiLiE22kt627C86"},
    { titulo: 'Hospital', contenido: 'Por emergencias llamar al 107', icono: <SiGooglemaps size={35}/>,boton:"Abrir en Google Maps",ruta:"https://maps.app.goo.gl/wSqXGDkykuX8yhzY6" } 
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
