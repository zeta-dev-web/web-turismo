import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarApp = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
  <Navbar.Brand href="/">
            <img
              alt=""
              src="/src/assets/turismo-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Turismo Trancas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="lugaresturisticos">Lugares Turísticos</Nav.Link>
        <Nav.Link href="gastronomia">Gastronomia</Nav.Link>
        <NavDropdown title="Utilidades" id="basic-nav-dropdown">
          <NavDropdown.Item href="comollegar">Como llegar</NavDropdown.Item>
          <NavDropdown.Item href="HorariosdeColectivos">
            Horarios de Colectivos
          </NavDropdown.Item>
          <NavDropdown.Item href="contacto">Contacto</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default NavbarApp;
