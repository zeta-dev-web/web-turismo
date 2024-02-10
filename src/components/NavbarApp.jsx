import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarApp = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">Turismo Trancas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Lugares Turísticos</Nav.Link>
        <NavDropdown title="Utilidades" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Horarios de Colectivo
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Ubicacion</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default NavbarApp;
