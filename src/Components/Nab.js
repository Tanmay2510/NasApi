import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useNavigate} from 'react-router-dom';

import "./Nab.css"
import Theico from '../icon/Theico';
function Nab() {
  const navstyle=
    {
      fontSize:'3vw',
      marginTop:'0.14641288433382138vw',
      color:'white',
      fontFamily: 'Gentium Book Plus, serif'
    }
    const linkstyle=
      {
        
          color:'white',
          marginRight:'5.124450951683748vw',
          fontSize:'1.4641288433382138vw',
          fontFamily: 'Gentium Book Plus, serif'
          
      
      }
      const navigate = useNavigate();
     
       const toNav = () =>{
        navigate("/Offers")
      }
  return (
    <Navbar className="nav-bg" expand="lg">
    <Container className="forz">
      <Theico />
      <Navbar.Brand  
       
      style={navstyle}>NAPP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginTop:'0.36603221083455345vw',marginRight:'-2.1961932650073206vw'}} >
          <Nav.Link  
          href="#here"
          className="hov" style={linkstyle}
          >Planets</Nav.Link>
          <Nav.Link  
          onClick={toNav}

          className="hov" style={linkstyle}>Offers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Nab;