import React from 'react';
import './Nabar.css';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';

const Nabar = () => {
  return (
    <Navbar expand={false}>
      <Container>
        <Navbar.Brand href="#">
          <b style={{ color: 'white', fontSize: '1.5em' }}>Travel Guru</b>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: 'white' }}
          aria-controls="offcanvasNavbar"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Travel Guru
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3 mt-4">
              <Nav.Link href="#action1">News</Nav.Link>
              <Nav.Link href="#action2">Destination</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <Button variant="warning">Login</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Nabar;
