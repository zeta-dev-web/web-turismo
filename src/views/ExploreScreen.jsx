import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardExplore from "../components/CardExplore";
import { SiGooglemaps } from "react-icons/si";
import boyero from "../assets/boyero.webp";
import iglesia from "../assets/iglesia.webp";
import iglesiaprincipal from "../assets/iglesiaprincipal.webp";
import pozo from "../assets/pozo.webp";
import plaza from "../assets/plaza.webp";
import pacto from "../assets/pacto.webp";
import WhatsappApp from "../components/WhatsappApp";

const ExploreScreen = () => {
  const cardsData = [
    {
      titulo: "Pozo San Francisco",
      contenido:
        "El Pozo de San Francisco de Trancas, también conocido como Pozo del Pescado, es un sitio religioso y cultural de gran importancia en la provincia de Tucumán, Argentina. Se encuentra ubicado a 4 kilómetros de la ciudad de Trancas, sobre la ex ruta 9, y es un lugar de peregrinación para miles de fieles cada año.",
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/fYs2dNeFPBiyAdtX7",
      imagen: pozo,
    },
    {
      titulo: "Plaza Principal",
      contenido:
        "La Plaza Principal de Trancas, también conocida como Plaza San Martín, se encuentra ubicada en el corazón de la ciudad de Trancas, provincia de Tucumán, Argentina. Es un espacio verde de gran belleza y valor histórico, siendo uno de los lugares más emblemáticos de la ciudad.",
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/mnvzqBbFNHDqf1K1A",
      imagen: plaza,
    },
    {
      titulo: "Pacto de las Trancas",
      contenido:
        "El Monumento Pacto de Las Trancas, es una obra de arte que conmemora el histórico acuerdo firmado en 1817 por los gauchos de las provincias de Salta, Jujuy y Tucumán. Este pacto, gestado por el General Martín Miguel de Güemes, consolidó la unidad regional y fortaleció la lucha por la independencia argentina.",
      icono: <SiGooglemaps size={35} />,
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/fU59eGNkA5myjfND8",
      imagen: pacto,
    },
    {
      titulo: "Iglesia Villa Vieja",
      contenido:
        "La Iglesia Vieja de Trancas, también conocida como Templo del Sagrado Corazón de Jesús, se encuentra ubicada en la Villa Vieja de Trancas. Construida a finales del siglo XVII, esta iglesia es una de las más antiguas de la provincia y un importante exponente de la arquitectura colonial.",
      icono: <SiGooglemaps size={35} />,
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/XCRFa8beL2ZE4K9o9",
      imagen: iglesia,
    },
    {
      titulo: "Rio Boyero",
      contenido:
        "El Río Boyero de Trancas, también conocido como Río Trancas, es un río de montaña de la provincia de Tucumán, Argentina. Nace en las cumbres calchaquíes y atraviesa la localidad de Trancas, creando un oasis natural de incomparable belleza.",
      icono: <SiGooglemaps size={35} />,
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/2n1L1nAzfpfxAYWE6",
      imagen: boyero,
    },
    {
      titulo: "Iglesia Principal",
      contenido:
        "La iglesia Princial de Trancas, es la parroquia San Joaquin, situada en el corazón de la ciudad de Trancas. Es uno de los monumentos historicos y mas importantes por su historia. ",
      icono: <SiGooglemaps size={35} />,
      boton: "Ver Ubicación",
      ruta: "https://maps.app.goo.gl/kuBgQib6zXjsRdKo9",
      imagen: iglesiaprincipal,
    },
  ];
  return (
    <div>
      <div className="contenedor p-0 ps-3 pe-3 m-0 pb-3">
        <Row
          xs={1}
          md={3}
          className="g-3 mt-1 justify-content-between flex-wrap"
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
      <WhatsappApp></WhatsappApp>
    </div>
  );
};

export default ExploreScreen;
