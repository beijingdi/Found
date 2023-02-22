import React,{useState,useRef} from "react";
import axios from "axios";

export const Register = (props) => {
  // const {nameRef,emailRef,passwordRef,confirmPasswordRef} = useRef();
  const [registerState, setRegisterState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
  });
 

  const registrationHandler = async (e) => {
   
    e.preventDefault();
    console.log(registerState)
    const {name,email,password} = registerState;
   
    try {
      const response = await axios.post("users/register",{
        name,email,password
      });
      return response
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <form onSubmit={registrationHandler}>
      <label>Name:</label>
      <input type="text"
             value = {registerState.name}
             onChange = {(e) => {setRegisterState(prev => {return{...prev, name: e.target.value}})}}
             required
              />
      <label>E-mail:</label>
      <input type="text"
             value = {registerState.email}
             onChange = {(e) => {setRegisterState(prev => {return{...prev, email: e.target.value}})}}
             required/>
      <label>Password:</label>
      <input type="text"
             value = {registerState.password}
             onChange = {(e) => {setRegisterState(prev => {return{...prev, password: e.target.value}})}}
             required/>
      <label>Confirm Password:</label>
      <input type="text"
             value = {registerState.confirmPassword}
             onChange = {(e) => {setRegisterState(prev => {return{...prev, confirmPassword: e.target.value}})}}
             required/>
      <button type="submit">register</button>
      <button onClick={props.closeForm}>close</button>
    </form>
  );
}

export default Register;