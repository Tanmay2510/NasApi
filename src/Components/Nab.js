import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import "./Nab.css"
import Theico from '../icon/Theico';
function Nab() {
  const navstyle=
    {
      fontSize:'30px',
      marginTop:'2px',
      color:'white',
      fontFamily: 'Gentium Book Plus, serif'
    }
    const linkstyle=
      {
        color:'white',
        marginRight:'70px',
        fontSize:'20px',
        fontFamily: 'Gentium Book Plus, serif'
        
      }
    
  
  return (
    <Navbar className="nav-bg" expand="lg">
    <Container className="forz">
      <Theico />
      <Navbar.Brand  
       
      style={navstyle}>NAPP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginTop:'5px',marginRight:'-30px'}} >
          <Nav.Link  
          style={linkstyle}>Planets</Nav.Link>
          <Nav.Link  
          style={linkstyle}>Offers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Nab;