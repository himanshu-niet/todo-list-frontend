import React from 'react'
import { Link  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarPage = () => {
  return (
    <Navbar bg="light" expand="lg" className="border border-bottom border-top-0 border-left-0 border-right-0 border-dark h6">
      <Container>
        <Navbar.Brand> <Link className="navbar-brand" to="/">News App</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <span className="nav-link"><Link className="nav-link mx-1" to="/">Home</Link></span>
            <span className="nav-link"> <Link className="nav-link mx-1" to="/health">Health</Link></span>
            <span className="nav-link"><Link className="nav-link mx-1" to="/sports">Sports</Link></span>
            <span className="nav-link"> <Link className="nav-link mx-1" to="/technology">Technology</Link></span>
            <span className="nav-link"><Link className="nav-link mx-1" to="/science">Science</Link></span>
            <span className="nav-link"><Link className="nav-link mx-1" to="/india">India</Link></span>

            
            
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



