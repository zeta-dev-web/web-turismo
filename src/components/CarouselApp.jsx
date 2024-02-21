import { Carousel } from 'rsuite';
import principal1 from "../assets/principal1.webp";
import principal2 from "../assets/principal2.webp";
import principal3 from "../assets/principal3.webp";
import principal4 from "../assets/principal4.webp";

function CarouselApp() {
  return (
    <Carousel autoplay  placement={false} className="custom-slider">
        <img src={principal1} alt='imagenprincipal1' height="400"/>
        <img src={principal2} alt='imagenprincipal2' height="400"/>
        <img src={principal3} alt='imagenprincipal3' height="400" />
        <img src={principal4} alt='imagenprincipal4' height="400" />
    </Carousel>
  );
}

export default CarouselApp;
