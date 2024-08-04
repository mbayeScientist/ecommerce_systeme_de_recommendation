import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <Navbar bg="dark" variant='dark' export="lg" collapseOnSelect>
          <Container fluid>
            <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <LinkContainer to="Accueil">
                <Nav.Link><i className='fas fa-shopping-cart'></i>Accueil</Nav.Link>
                </LinkContainer>
                <LinkContainer to="Contact">
                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                </LinkContainer>
                <Nav.Link href="#" disabled>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header
