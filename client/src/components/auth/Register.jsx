import React,{useState,useRef} from "react";
import {users} from "./users";

export const Register = (props) => {
  const {nameRef,emailRef,passwordRef,confirmPasswordRef} = useRef();


  const registrationHandler = (e) => {
    e.preventDefault();
    const [name,email,password,confirmPassword] = [nameRef,emailRef,passwordRef.confirmPasswordRef].map(ref => ref.current.value); 
    //add form validation
    //change below to axios
    users.append({name,email,password});
  
  }

  return (
    <form onSubmit={registrationHandler}>
      <label>Name:</label>
      <input type="text"
             ref={nameRef}
             required
              />
      <label>E-mail:</label>
      <input type="text"
             ref={emailRef}
             required/>
      <label>Password:</label>
      <input type="text"
             ref={passwordRef} 
             required/>
      <label>Confirm Password:</label>
      <input type="text"
             ref={confirmPasswordRef}
             required/>
      <button type="submit">register</button>
    </form>
  );
}

export default Register;