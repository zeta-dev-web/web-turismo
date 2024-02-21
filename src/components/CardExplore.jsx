import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../css/CardExplore.css";

const CardExplore =({titulo, contenido, boton, imagen, ruta})=>{


return(
<div>
  <Card border="success" className='mt-2 p-0 m-0 cardcolor'>
    <Card.Body className='text-center d-flex flex-column justify-content-between cardsize'>
      <div>
        <Card.Title className=''><h4>{titulo}</h4></Card.Title>
        <Card.Img variant="top" src={imagen} />
      </div>
      <div className=''>
        <Card.Text>{contenido}</Card.Text>
        <div><Link to={ruta}>
          <Button className='mt-2 mb-1 colorbutton'>{boton}</Button>
        </Link></div>
      </div>
    </Card.Body>
  </Card>
</div>
    )
}

export default CardExplore
