import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardApp =({titulo, contenido, icono, boton, ruta})=>{


return(
<div>
<Card  border="primary" className='mt-2 p-0 m-0'>
      <div className="text-center mt-2">{icono}</div>
      <Card.Body className='text-center'>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Link to={ruta}>
  <Button variant="success" className='mt-4 mb-1'>{boton}</Button>
</Link>
      </Card.Body>
    </Card>
</div>
    )
}
export default CardApp;