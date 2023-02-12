import React, { useRef } from "react";
import axios from "axios";
import { users } from "./users";


export const Login = (props) => {
  // const [user,setUser] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  // const passwordRef = useRef();


  // const setToken = (token) => {
  //   localStorage.setItem("jwtToken", token);
  // };

  // // Attach the JWT token to API requests
  // const attachToken = () => {
  //   const jwtToken = localStorage.getItem("jwtToken");
  //   if (jwtToken) {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  //   }
  // };

  const logInHandler = async (e) => {
    e.preventDefault();

    // Example usage:
    // After a successful login
    try {
      const response = await axios.post("/login", {
        username: emailRef.current.value,
        password: passwordRef.current.value,
      });
  
      // setToken(response.data.token);
      // attachToken();
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <form onSubmit={logInHandler}>
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