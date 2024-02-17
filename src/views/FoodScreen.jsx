import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardExplore from '../components/CardExplore'
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";


const FoodScreen = () => {
  const cardsData = [
    { titulo: 'Pozo San Francisco', contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore excepturi id velit veniam porro voluptatem commodi quisquam maxime nam, dolores, alias praesentium, necessitatibus veritatis! Explicabo sint vel expedita sed minus praesentium consectetur debitis, ex repellendus non harum, aspernatur ad accusamus odio beatae architecto ratione a, veniam reprehenderit possimus! At!", boton:"Ver Ubicación", ruta: "lugaresturisticos", imagen:"https://www.eltucumano.com/fotos/notas/2021/07/23/210723191935_48911.jpg"},
    { titulo: 'Plaza Principal', contenido: 'Disfruta de los mejores platos...', icono: <MdFoodBank size={35}/>, boton:"Ver más...", ruta: "/gastronomia"},
    { titulo: 'Monumento', contenido: 'Conoce las fiestas locales...', icono: <SiGooglemaps size={35}/>,boton:"Ver más...",ruta:"/eventoslocales" },
    { titulo: 'Iglesia Villa Vieja', contenido: 'Como llegar a Trancas...', icono: <SiGooglemaps size={35}/>,boton:"Abrir en Google Maps",ruta:"https://maps.app.goo.gl/YCVdmd4VJHox8xyC6" },
    { titulo: 'Rio Boyero', contenido: 'Conoce las fiestas locales...', icono: <SiGooglemaps size={35}/>,boton:"Ver más...",ruta:"/eventoslocales" },
    { titulo: 'Iglesia Principal', contenido: 'Como llegar a Trancas...', icono: <SiGooglemaps size={35}/>,boton:"Abrir en Google Maps",ruta:"https://maps.app.goo.gl/YCVdmd4VJHox8xyC6" },
  
  ];
  return (
    <div>
      <div className="contenedor p-0 ps-3 pe-3 m-0 pb-3">
  <Row xs={1} md={3} className="g-3 mt-1 justify-content-between flex-wrap">
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

export default FoodScreen
