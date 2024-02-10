import { react, useEffect, useState } from "react";
import NavbarApp from "../components/NavbarApp";
import CarouselApp from "../components/CarouselApp";
import FooterApp from "../components/FooterApp";
import CardApp from "../components/CardApp";
import "../css/HomeScreen.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardTextApp from "../components/CardTextApp";
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const HomeScreen = () => {
  const cardsData = [
    { titulo: 'Lugares Turísticos', contenido: 'Conoce los lugares historicos de Trancas...', icono:<FaMapSigns size={35}/>, boton:"Ver más..."},
    { titulo: 'Gastronomía', contenido: 'Disfruta de los mejores platos regionales...', icono: <MdFoodBank size={35}/>, boton:"Ver más..."},
    { titulo: 'Ubicación', contenido: 'Como llegar a Trancas...', icono: <SiGooglemaps size={35}/>,boton:"Abrir en Google Maps" },
  ];
  return (
    <div> 
      <NavbarApp />
      <CarouselApp />
      <div className="contenedor p-0 ps-3 pe-3 m-0">
  <Row xs={1} md={3} className="g-3 mt-4 justify-content-between flex-wrap">
    {cardsData.map((card, idx) => (
      <Col key={idx} className="">
        <CardApp
          titulo={card.titulo}
          contenido={card.contenido}
          icono={card.icono}
          boton={card.boton}
        />
      </Col>
    ))}
  </Row>
</div>   <div className="mt-4 mb-4"><CardTextApp/></div>
     <FooterApp />
        </div>
  );
};
export default HomeScreen;
