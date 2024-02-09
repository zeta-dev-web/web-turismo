import { Toggle, Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import "rsuite/dist/rsuite.min.css";

const NavbarApp = () => (
  <Navbar>
    <Navbar.Brand href="#">TURISMO TRANCAS</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Inicio</Nav.Item>
      <Nav.Item>Lugares Turísticos</Nav.Item>
      <Nav.Item>Gastronomía</Nav.Item>
      <Nav.Item>Ubicación</Nav.Item>
      <Nav.Menu title="Utilidades">
        <Nav.Item>Telefonos Utiles</Nav.Item>
        <Nav.Item>Horarios de Colectivos</Nav.Item>
        <Nav.Item>Contacto</Nav.Item>
        </Nav.Menu>
    </Nav>
  </Navbar>
);

export default NavbarApp;
