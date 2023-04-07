import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Topbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='hp-topbar' variant="dark">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className='top-nav' href="#features">phone: 98745747847</Nav.Link>
            <Nav.Link className='top-nav' href="#pricing">email: hospital@gmail.com</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='top-nav' href="#deets"><i className='fa fa-facebook'></i></Nav.Link>
            <Nav.Link className='top-nav' href="#deets"><i className='fa fa-twitter'></i></Nav.Link>
            <Nav.Link className='top-nav' href="#deets"><i className='fa fa-instagram'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Topbar
