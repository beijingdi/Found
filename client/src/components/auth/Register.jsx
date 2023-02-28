import React,{useState,useRef} from "react";
import axios from "axios";
import Modal from "react-bootstrap/modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Register = (props) => {
  // const {nameRef,emailRef,passwordRef,confirmPasswordRef} = useRef();
  const [registerState, setRegisterState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
  });
 

  const registerHandler = async (e) => {
   
    e.preventDefault();
    const {name,email,password} = registerState;
   
    try {
      const response = await axios.post("users/register",{
        name,email,password
      });
      props.setShow(false);
      props.setUser(response.data.user);
      return;
    } catch (err) {
      console.log(err);
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
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={registerHandler}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Your Name"
              value={registerState.name}
              onChange={(e) => {setRegisterState(prev => {return {...prev, name: e.target.value}})}} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={registerState.email}
              onChange={(e) => {setRegisterState(prev => {return {...prev, email: e.target.value}})}}
            />
            {/* <Form.Text className="text-muted">
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={registerState.password}
              onChange={(e) => {setRegisterState(prev => {return {...prev, password: e.target.value}})}} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={registerState.confirmPassword}
              onChange={(e) => {setRegisterState(prev => {return {...prev, confirmPassword: e.target.value}})}} 
            />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
          >
            Regsiter
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
    // <form onSubmit={registrationHandler}>
    //   <label>Name:</label>
    //   <input type="text"
    //          value = {registerState.name}
    //          onChange = {(e) => {setRegisterState(prev => {return{...prev, name: e.target.value}})}}
    //          required
    //           />
    //   <label>E-mail:</label>
    //   <input type="text"
    //          value = {registerState.email}
    //          onChange = {(e) => {setRegisterState(prev => {return{...prev, email: e.target.value}})}}
    //          required/>
    //   <label>Password:</label>
    //   <input type="text"
    //          value = {registerState.password}
    //          onChange = {(e) => {setRegisterState(prev => {return{...prev, password: e.target.value}})}}
    //          required/>
    //   <label>Confirm Password:</label>
    //   <input type="text"
    //          value = {registerState.confirmPassword}
    //          onChange = {(e) => {setRegisterState(prev => {return{...prev, confirmPassword: e.target.value}})}}
    //          required/>
    //   <button type="submit">register</button>
    //   <button onClick={props.closeForm}>close</button>
    // </form>
  );
}

export default Register;