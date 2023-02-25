import React, { useState,useRef } from "react";
import axios from "axios";
import classes_login from "./Login.module.css";



export const Login = (props) => {
  // const [user,setUser] = useState("");
  const [loginState,setLoginState] = useState({email: "", password: ""});


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
      props.setLoginWindow(false);
      return;
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={`${classes_login.overlay}`}>
      <form onSubmit={logInHandler}>
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
      </form>
    </div>
  );
}

export default Login;