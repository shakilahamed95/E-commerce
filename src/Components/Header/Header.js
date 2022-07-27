import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignout = () => {
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">SA Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto me-1'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/all-product">All Product</Nav.Link>
            <Nav.Link as={Link} to="/contruct-us">Contruct-us</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            {user ?
              <Nav.Link onClick={handleSignout}>Log Out</Nav.Link>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;