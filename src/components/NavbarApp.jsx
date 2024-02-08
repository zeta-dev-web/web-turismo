import { Toggle, Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import "rsuite/dist/rsuite.min.css";

const NavbarApp = () => (
  <Navbar>
    <Navbar.Brand href="#">TURISMO TRANCAS</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Inicio</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="Utilidades">
        <Nav.Item>Telefonos Utiles</Nav.Item>
        <Nav.Item>Horarios de Colectivos</Nav.Item>
        <Nav.Menu title="Contacto">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
  </Navbar>
);

export default NavbarApp;
