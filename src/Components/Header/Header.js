
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Button,Nav,Navbar,Container,variant } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {
   Link
    
  } from "react-router-dom";

const Header = () => {
  const {user,logOut} = useAuth();
  console.log(user.displayName);
    return (
        <div>
           
  <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>React-Bootstrap</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/home">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
        <LinkContainer to="/products">
      <Nav.Link>Products</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
      <Nav.Link>Register</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link>login</Nav.Link>
      </LinkContainer>
      <br/>
      <span className="text-white">{user.displayName}</span>
              {
               
                 user?.displayName &&  <button  onClick={logOut}variant='secondary'> Logout </button>
               
              }
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
        </div>
    );
};

export default Header;