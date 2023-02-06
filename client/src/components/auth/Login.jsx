import React,{useRef} from "react";
import {users} from "./users";

export const Login = (props) => {
  const {emailRef,passwordRef} = useRef();
  // const passwordRef = useRef();

  const logInHandler = (e) => {
    e.preventDefault();
    return;
  }

  return (
    <form onSubmit = {logInHandler}>
      <label>email:</label>
      <input type="text"
             ref={emailRef}
      />
      <label>password:</label>
      <input type="text"
             ref={passwordRef}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;