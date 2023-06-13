import "./Navebar.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logofewnu from "../../assets/logofewnu.jpg"
function Navebar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="mx-5"><img style={{ height:"40px", width:"40px" }} src={logofewnu} alt="logofewnu"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Accueil</Nav.Link>
            <Nav.Link href="#pricing">Qui sommes-nous ?</Nav.Link>
            <NavDropdown title="Nos applications" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fewnu budget</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fewnu compta et facturation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tayeur gestion</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navebar;
