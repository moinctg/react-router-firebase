import React from 'react';
import { Button,Nav,Navbar,Container,variant,Form,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const  {signInUsingGoogle,signInUsingGithub}  = useAuth();
    return (
        <div>
            <h3>pls Login</h3>
            {/* <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
    <Col sm={{ span: 10, offset: 2 }}>
    <Link to="/register"> New User</Link>
    </Col>

  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      
      
    
      <Button type="submit">Sign in</Button> 
        </Form.Group>
        </Form>
      */}

  
      <Button variant="secondary" onClick={ signInUsingGoogle } type="submit">Sign in Google</Button>
    <br/>
      <Button variant="dark" onClick={signInUsingGithub} type="submit">Sign in Github</Button>
     

   

        </div>
    );
};

export default Login;