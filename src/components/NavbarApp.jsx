import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarApp = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
  <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://i.ibb.co/0yjv9NK/turismo-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Turismo Trancas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-center">
        <Nav.Link href="lugaresturisticos">Lugares Turísticos 🗺️</Nav.Link>
        <Nav.Link href="gastronomia">Gastronomia 🍴</Nav.Link>
        <Nav.Link href="Eventoslocales">Eventos Locales 🎉</Nav.Link>
        <Nav.Link href="HorariosdeColectivos">Horarios de Colectivos 🚌</Nav.Link>
        <Nav.Link href="Servicios">Servicios de Emergencias 🚨</Nav.Link>
        <Nav.Link href="comollegar">Como llegar 🗺️</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default NavbarApp;
