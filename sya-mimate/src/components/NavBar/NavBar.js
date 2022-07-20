import logo from  '../Images/logo-mimate.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'


function NavBarLogo() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home" className='brand'>
            <img
              alt=""
              src={logo}
              className="d-inline-block align-center img-fluid logoMate"
            />{' '}
            SyA Mi Mate
          </Navbar.Brand>
          <Nav className="m-auto navLinks">
            <Nav.Link href="#Bombillas">Bombillas</Nav.Link>
            <Nav.Link href="#Yerbas">Yerbas</Nav.Link>
            <Nav.Link href="#Termos">Termos</Nav.Link>
            <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default NavBarLogo;