import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import "./Nab.css"
import Theico from '../icon/Theico';
import zIndex from '@mui/material/styles/zIndex';
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
        <Nav className="ms-auto" style={{marginRight:'30px', marginTop:'5px'}} >
          <NavDropdown title="Offers" id="basic-nav-dropdown">
            <NavDropdown.Item 
            >Action</NavDropdown.Item>
            <NavDropdown.Item 
            >Another action</NavDropdown.Item>
            <NavDropdown.Item 
            >Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item 
            >Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  
          style={linkstyle}>Planets</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Nab;