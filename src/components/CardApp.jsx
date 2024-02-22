import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../css/CardApp.css"

const CardApp =({titulo, contenido, icono, boton, ruta})=>{


return(
<div>
<Card  border="sucess" className='mt-2 p-0 m-0 cardcolor'>
      <div className="text-center mt-2">{icono}</div>
      <Card.Body className='text-center card-body'>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Link to={ruta} target="_blank" rel="noopener noreferrer">
  <Button className='mt-4 mb-1 colorbutton'>{boton}</Button>
</Link>
      </Card.Body>
    </Card>
</div>
    )
}
export default CardApp;