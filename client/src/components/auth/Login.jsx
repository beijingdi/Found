import React, { useState,useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import classes_login from "./Login.module.css";



export const Login = (props) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [user,setUser] = useState("");
  const [loginState,setLoginState] = useState({email: "", password: ""});

  const openRegister = (e) => {
    e.preventDefault();
    props.setShow(false);
    props.setRegister(true);
  }


  const logInHandler = async (e) => {
    e.preventDefault();

    // Example usage:
    // After a successful login
    try {
      const response = await axios.post("users/login", {
        email: loginState.email,
        password: loginState.password
      });

      props.setUser(response.data.user);
      props.setShow(false);
      return;
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>

      <Modal
        show={props.show}
        onHide={()=>{props.setShow(false)}}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={logInHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={loginState.email}
                onChange={(e) => {setLoginState(prev => {return {...prev, email: e.target.value}})}}
              />
              {/* <Form.Text className="text-muted">
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Password"
                value={loginState.password}
                onChange={(e) => {setLoginState(prev => {return {...prev, password: e.target.value}})}} 
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit"
            >
              Log In
            </Button>
            <Button 
              variant="Light" 
              onClick={openRegister}
            >
              Register
            </Button>
          </Form>

        {/* <form onSubmit={logInHandler}>
          <label>email:</label>
          <input type="text"
            value={loginState.email}
            onChange={(e) => {setLoginState(prev => {return {...prev, email: e.target.value}})}}
            required
          />
          <label>password:</label>
          <input type="text"
            value={loginState.password}
            onChange={(e) => {setLoginState(prev => {return {...prev, password: e.target.value}})}}
            required
          />
          <button type="submit">Log In</button>
        </form> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.setShow(false)}}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Login;