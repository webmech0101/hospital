import React from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <div className='hp-header'>
        <Navbar bg="light" expand="lg" className='hp-navbar'>
      <Container fluid>
        <Navbar.Brand href="#" className='hp-nav-logo'><b>SHARAVATHI HOSPITAL</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Department</Nav.Link>
            <Nav.Link href="#action4">Clients</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#">Contact</Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-success" className='hp-nav-btn'>Appointment</Button>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
  )
}

export default Header
