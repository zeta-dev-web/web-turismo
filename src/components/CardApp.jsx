import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardApp =({titulo, contenido, icono, boton})=>{


return(
<div>
<Card className=''>
      <div className="text-center mt-2">{icono}</div>
      <Card.Body className='text-center'>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Button variant="success">{boton}</Button>
      </Card.Body>
    </Card>
</div>
    )
}
export default CardApp;