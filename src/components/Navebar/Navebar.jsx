import "./Navebar.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logofewnu from "../../assets/logofewnu.jpg";
import { NavLink } from "react-router-dom";

function Navebar() {
  
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="mx-5"><img style={{ height:"40px", width:"40px" }} src={logofewnu} alt="logofewnu"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/accueil">Accueil</NavLink>
            <NavLink id="lien1"  to="/apropos">Qui sommes-nous ?</NavLink>
            <NavDropdown to="/nosapp" title="Nos applications" id="collasible-nav-dropdown">
              <NavLink to="/budget"><NavDropdown.Item>Fewnu budget</NavDropdown.Item></NavLink>
              <NavDropdown.Item>
                Fewnu compta et facturation
              </NavDropdown.Item>
              <NavDropdown.Item>Tayeur gestion</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavLink id="lien2" to="contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navebar;
