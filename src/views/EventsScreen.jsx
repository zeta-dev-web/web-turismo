import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardExplore from "../components/CardExplore";
import festival from "../assets/festival.webp";
import expo from "../assets/expo.webp";
import sanfrancisco from "../assets/sanfrancisco.webp";

const EventsScreen = () => {
  const cardsData = [
    {
      titulo: "Festival del Caballo",
      contenido:
        "La Fiesta Nacional del Caballo es un evento tradicional que se celebra anualmente en la ciudad de Trancas. Este festival reúne a jinetes, caballos y familias de toda la región para celebrar la cultura gaucha y la tradición ecuestre.",
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/ZseYYAuWescd9uGo6",
      imagen: festival,
    },
    {
      titulo: "Expo Láctea",
      contenido:
        "La Expo Láctea de Trancas es un evento anual que reúne a productores, empresas y amantes de la leche en un espacio único para celebrar la tradición láctea de la región. En la misma se observan Exposicion y venta de productos lácteos, Concursos para premiar calidad, charlas informativas, espectáculos y muchos mas.",
      boton: "Ver Ubicacion",
      ruta: "https://maps.app.goo.gl/4rqyJzot1VQ6JScG7",
      imagen: expo,
    },
    {
      titulo: "Fiesta de San Francisco",
      contenido:
        "La Fiesta de San Francisco de Trancas es una celebración religiosa que se lleva a cabo anualmente en la localidad de Trancas, provincia de Tucumán. Esta fiesta reúne a miles de fieles de la región para venerar a San Francisco Solano, patrono de la ciudad. En ese día, se celebra una Misa, procesion, bendiciones de animales, ferias y espectáculos.",
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/W6LeRaby1nHre6MC9",
      imagen: sanfrancisco,
    },
  ];
  return (
    <div>
      <div className="contenedor p-0 ps-3 pe-3 m-0 pb-3">
        <Row
          xs={1}
          md={3}
          className="g-1 mt-1 justify-content-between flex-wrap"
        >
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
  );
};

export default EventsScreen;
