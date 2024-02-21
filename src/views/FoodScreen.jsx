import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardExplore from '../components/CardExplore'
import { FaMapSigns } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import loxon from "../assets/loxon.webp"
import laesquina from '../assets/laesquina.webp';
import losaltos from '../assets/losaltos.webp';
import foodmorfi from '../assets/foodmorfi.webp';
import lacasona from '../assets/lacasona.webp';


const FoodScreen = () => {
  const cardsData = [
    { titulo: 'Loxon', contenido: "Cervecería Loxon es un refugio para los amantes de la cerveza artesanal en el corazón de Trancas, Tucumán. Este local combina la pasión por la cerveza con la calidez de un ambiente familiar, creando un espacio único para disfrutar de una experiencia cervecera memorable.", boton:"Ver Ubicación", ruta: "lugaresturisticos", imagen:loxon},
    { titulo: 'La Esquina', contenido: 'La Esquina de Trancas es una sandwichería familiar que se ha convertido en un oasis de sabor y tradición en el corazón de la ciudad. Este local ha deleitado a locales y visitantes con sus exquisitos sándwiches elaborados con ingredientes frescos y de la más alta calidad.', icono: <MdFoodBank size={35}/>, boton:"Ver Ubicación", ruta: "/gastronomia", imagen:laesquina},
    { titulo: 'La Casona', contenido: 'La Casona de Trancas es un restaurante familiar que se ha convertido en un emblema de la gastronomía tradicional tucumana. Este local ha deleitado a locales y visitantes con sus exquisitos platos elaborados con recetas caseras y productos frescos de la región.', icono: <SiGooglemaps size={35}/>,boton:"Ver Ubicación",ruta:"/eventoslocales", imagen:lacasona },
    { titulo: 'Food Morfi', contenido: 'Food Morfi de Trancas es un restaurante único que ofrece una experiencia culinaria sin igual en la ciudad. Este local combina la pasión por la comida con la innovación y la creatividad, creando un espacio donde los sabores del mundo se fusionan en una explosión de sensaciones.', icono: <SiGooglemaps size={35}/>,boton:"Ver Ubicación",ruta:"https://maps.app.goo.gl/YCVdmd4VJHox8xyC6", imagen:foodmorfi },
    { titulo: 'La 9 Bar', contenido: 'La 9 Bar ubicada sobre la ruta 9,  un establecimiento ubicado en la ruta nacional 9, siendo un punto de encuentro popular para locales y viajeros. Ofrece un ambiente relajado y acogedor, ideal para disfrutar de un momento agradable con amigos o familia.', icono: <SiGooglemaps size={35}/>,boton:"Ver Ubicación",ruta:"/eventoslocales", imagen: lacasona },
    { titulo: 'Los Altos', contenido: 'Bar Los Altos de Trancas es un lugar único, donde se fusionan la buena música, el ambiente distendido y la calidez del trato familiar. Este bar se ha convertido en un punto de encuentro para locales y visitantes que buscan disfrutar de una noche de diversión y entretenimiento.', icono: <SiGooglemaps size={35}/>,boton:"Ver Ubicación",ruta:"/eventoslocales", imagen: losaltos },  
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
