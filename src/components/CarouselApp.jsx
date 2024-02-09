import { Carousel } from 'rsuite';
function CarouselApp() {
  return (
    <Carousel autoplay className="custom-slider">
        <img src="https://www.tucumanturismo.gob.ar/carga/image/trancas002.JPG" height="400"/>
        <img src="https://www.tucumanturismo.gob.ar/carga/image/trancas001.jpg" height="400"/>
        <img src="https://www.tucumanturismo.gob.ar/carga/image/trancas001.jpg" height="400" />
    </Carousel>
  );
}

export default CarouselApp;
