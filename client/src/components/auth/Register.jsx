import React,{useState} from "react";
import users from "./users";

export const Register = (props) => {


  const submitHandler = (e) => {
    e.preventDefault();
    users.append({name,password,email});
    //axios
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Name:</label>
      <input type="text"
             value={name}
             required
              />
      <label>E-mail:</label>
      <input type="text"
             value={email}
             required/>
      <label>Password:</label>
      <input type="text"
             value = {password} 
             required/>
      <label>Confirm Password:</label>
      <input type="text"
             value={confirmPassword}
             required/>
      <button type="submit">register</button>
    </form>
  );


}