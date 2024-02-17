import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../css/CardExplore.css";

const CardExplore =({titulo, contenido, boton, imagen, ruta})=>{


return(
<div>
<Card  border="primary" className='mt-2 p-0 m-0'>
      <Card.Body className='text-center'>
        <Card.Title><h4>{titulo}</h4></Card.Title>
        <Card.Img variant="top" src={imagen} />
        <Card.Text>
          {contenido}
        </Card.Text>
        <Link to={ruta}>
  <Button className='mt-4 mb-1 colorbutton'>{boton}</Button>
</Link>
      </Card.Body>
    </Card>
</div>
    )
}

export default CardExplore
