import React from 'react'

const MapsApp = () => {
  return (
    <div className="map-iframe-container ps-2 pe-2">
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14315.85555243031!2d-65.29121295734318!3d-26.230362884770766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94188fdfb7afd6b7%3A0x4622466408f4af0a!2sTrancas%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1707845563726!5m2!1ses!2sar"
      className="map-iframe"
      style={{ border: '0', width: '100%', height: '450px' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default MapsApp
