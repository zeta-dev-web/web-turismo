import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardExplore from '../components/CardExplore'
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";


const EventsScreen = () => {
  const cardsData = [
    { titulo: 'Festival del Caballo', contenido: "La Fiesta Nacional del Caballo es un evento tradicional que se celebra anualmente en la ciudad de Trancas. Este festival reúne a jinetes, caballos y familias de toda la región para celebrar la cultura gaucha y la tradición ecuestre.", boton:"Ver Ubicación", ruta: "lugaresturisticos", imagen:"https://www.eltucumano.com/fotos/notas/2021/07/23/210723191935_48911.jpg"},
    { titulo: 'Expo Láctea', contenido: 'La Expo Láctea de Trancas es un evento anual que reúne a productores, empresas y amantes de la leche en un espacio único para celebrar la tradición láctea de la región. En la misma se observan Exposicion y venta de productos lácteos, Concursos para premiar calidad, charlas informativas, espectáculos y muchos mas.', icono: <MdFoodBank size={35}/>, boton:"Ver más...", ruta: "/gastronomia"},
    { titulo: 'Fiesta de San Francisco', contenido: 'La Fiesta de San Francisco de Trancas es una celebración religiosa que se lleva a cabo anualmente en la localidad de Trancas, provincia de Tucumán. Esta fiesta reúne a miles de fieles de la región para venerar a San Francisco Solano, patrono de la ciudad. En ese día, se celebra una Misa, procesion, bendiciones de animales, ferias y espectáculos.', icono: <SiGooglemaps size={35}/>,boton:"Ver más...",ruta:"/eventoslocales" },
  ];
  return (
    <div>
      <div className="contenedor p-0 ps-3 pe-3 m-0 pb-3">
  <Row xs={1} md={3} className="g-1 mt-1 justify-content-between flex-wrap">
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

export default EventsScreen

