import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          Project FUE
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/RegisterPage">Register</Nav.Link>
        </Nav>
        <Navbar.Text>
          <img
            src={avatar}
            alt="Avatar"
            width="30"
            height="30"
            className="rounded-circle"
          />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBar;


