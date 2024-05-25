import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarApp.css"

const NavbarApp = () => (
  <Navbar expand="lg" className="bg-success">
    <Container fluid className="px-0">
    <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            alt="logo"
            src="https://i.ibb.co/NmXYY0F/logo.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
          <h3 className="text-light ms-2 mb-1">Turismo Trancas</h3>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-center">
          <Nav.Link className="text-light me-xl-3 ms-xl-4" href="lugaresturisticos">Lugares Turísticos 🗺️</Nav.Link>
          <Nav.Link className="text-light ms-xl-1 me-xl-2" href="gastronomia">Gastronomia 🍴</Nav.Link>
          <Nav.Link className="text-light ms-xl-1 me-xl-2" href="Eventoslocales">Eventos Locales 🎉</Nav.Link>
          <Nav.Link className="text-light ms-xl-3 me-xl-2" href="HorariosdeColectivos">
            Horarios de Colectivos 🚌
          </Nav.Link>
          <Nav.Link className="text-light ms-xl-4 me-xl-3" href="Servicios">Servicios de Emergencias 🚨</Nav.Link>
          <Nav.Link className="text-light ms-xl-3" href="comollegar">Como llegar 📍</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarApp;
