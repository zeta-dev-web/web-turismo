import React from "react";
import trancas from "../assets/trancas2.png";
import "../css/CardTextApp.css"

const CardTextApp = () => {
  return (
    <div className="text-center">
      <img src={trancas} alt="trancas" width="380" className="img-fluid card-imagetext" />
      <h5 className="ms-3 me-3 mt-2 text-center lh-1">
        Trancas, en el corazón de las Cumbres Calchaquíes, te invita a descubrir
        un remanso de paz y belleza natural. <br/>
        Este destino te ofrece una experiencia única para conectar con la naturaleza, la historia y la cultura.
        <br />
        Déjate sorprender por las vistas panorámicas, los ríos y su gastronomía.
        Practica senderismo, cabalgatas, pesca o simplemente relájate en la
        tranquilidad del pueblo. <br />
        Recorre Trancas, conoce sus lugares túristicos y participa de las tradiciones locales.
        <br />
        No te pierdas el Festival del Caballo, un evento único que reúne a
        jinetes de toda la región. Celebra las fiestas patronales con música,
        bailes y comidas típicas. 
        <br />
        Llévate un recuerdo único hecho a mano por los
        artesanos locales.
        <br />
      </h5>
      <h4 className="ms-3 mt-3 text-center">
        Trancas te espera para que vivas una experiencia inolvidable! Veni a
        descubrir este paraíso escondido en Tucumán...
      </h4>
    </div>
  );
};

export default CardTextApp;
