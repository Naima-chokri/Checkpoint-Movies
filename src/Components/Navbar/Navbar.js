import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import MovieAdd from '../MovieAdd/MovieAdd'

const NavbarAll = ({NewMovie}) => {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Naima Land</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <MovieAdd NewMovie={NewMovie}/>
      </Nav>
      <Form className="d-flex">
        <FormControl
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
    </>
  )
}

export default NavbarAll