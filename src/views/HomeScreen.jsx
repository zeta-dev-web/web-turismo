import { react, useEffect, useState } from "react";
import { useSpring, animated } from '@react-spring/web'
import CarouselApp from "../components/CarouselApp";
import CardApp from "../components/CardApp";
import "../css/HomeScreen.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardTextApp from "../components/CardTextApp";
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { TfiAgenda } from "react-icons/tfi";

const HomeScreen = () => {
  const cardsData = [
    { titulo: 'Lugares Turísticos', contenido: 'Conoce los lugares historicos...', icono:<FaMapSigns size={35}/>, boton:"Ver más...", ruta: "lugaresturisticos"},
    { titulo: 'Gastronomía', contenido: 'Disfruta de los mejores platos...', icono: <MdFoodBank size={35}/>, boton:"Ver más...", ruta: "/gastronomia"},
    { titulo: 'Eventos Locales', contenido: 'Conoce las fiestas locales...', icono: <TfiAgenda size={35}/>,boton:"Ver más...",ruta:"/eventoslocales" },
    { titulo: 'Ubicación', contenido: 'Como llegar a Trancas...', icono: <SiGooglemaps size={35}/>,boton:"Abrir en Google Maps",ruta:"https://maps.app.goo.gl/YCVdmd4VJHox8xyC6" },
  ];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const props = useSpring({
    opacity: scrollY / 100, // La opacidad del componente aumenta a medida que se desplaza
  });

  return (
    <div> 
      <CarouselApp />
      <animated.div style={props}>
      <div className="contenedor p-0 ps-3 pe-3 m-0">
  <Row xs={1} md={4} className="g-2 mt-1 justify-content-between flex-wrap">
    {cardsData.map((card, idx) => (
      <Col key={idx} className="">
        <CardApp
          titulo={card.titulo}
          contenido={card.contenido}
          icono={card.icono}
          boton={card.boton}
          ruta={card.ruta}
        />
      </Col>
    ))}
  </Row>
</div> <div className="mt-4 mb-4"><CardTextApp/></div>
</animated.div>  </div>
  );
};
export default HomeScreen;
