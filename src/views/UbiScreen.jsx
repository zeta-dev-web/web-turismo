import React from "react";
import { Link } from "react-router-dom";
import MapsApp from "../components/MapsApp";
import Button from "react-bootstrap/Button";
import WhatsappApp from "../components/WhatsappApp";

const UbiScreen = () => {
  return (
    <div className="vh-100 text-center d-flex justify-content-between flex-column">
      <h2 className="mt-2">Mapa de Trancas</h2>
      <div>
        <MapsApp></MapsApp>
      </div>
      <Link to="https://maps.app.goo.gl/YCVdmd4VJHox8xyC6" target="_blank">
        <Button variant="success" className="mt-1 mb-4">
          Abrir en GoogleMaps
        </Button>
      </Link>
      <WhatsappApp></WhatsappApp>
    </div>
  );
};

export default UbiScreen;
