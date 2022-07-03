import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import "./Nab.css"
function Nab() {
  const navstyle=
    {
      fontSize:'22px',
      marginLeft:'-16px',
      color:'white',
      fontFamily:'Finlandica'
    }
    const linkstyle=
      {
        color:'white',
        fontSize:'18px'
      }
    
  
  return (
    <Navbar className="nav-bg" expand="lg">
    <Container>

      <Navbar.Brand  href="#home" style={navstyle}>NAPP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{marginRight:'30px'}} >
     
          <NavDropdown title="Offers" id="basic-nav-dropdown"   >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" style={linkstyle}>Planets</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Nab;