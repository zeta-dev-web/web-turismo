import React from 'react';
import "../css/WhatsappApp.css"
import whatsapp from "../assets/wsp.png"

const WhatsappApp = () => {
  return (
    <div className="wsp">
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="logo de WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsappApp;