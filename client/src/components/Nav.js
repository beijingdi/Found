import React,{useState}from "react";
import { NavLink } from "react-router-dom";
import nav_classes from './Nav.module.css';

import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";




const Nav = (props) => {
  const loggedIn = !!props.cookies.user;
  const user = props.cookies.user? props.cookies.user.name : "";
  const [name, setName] = useState(user);

  //display login/registeration form
  const [loginWindow, setLoginWindow] = useState(loggedIn);
  const [registerWindow,setRegisterWindow] = useState(false);

  const openLogin = () => {
    loginWindow ? setLoginWindow(false) : setLoginWindow(true);
  }

  const openRegister = () => {
    setLoginWindow(false);
    setRegisterWindow(true);
  }
  const closeRegister = (e) => {
    setRegisterWindow(false);
  }


  return(
    <>

    <nav className="navbar-expand-lg">

      <a className={`${nav_classes.logo} navbar-brand`} href="/">FOUND.</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Corporate Retreats</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          {loggedIn && (
            <li class="nav-item">
              <strong>{name}</strong>
            </li>

          )}
          {!loggedIn && (
            <li class="nav-item">
            <button onClick={openLogin}>Log In</button>
            </li>
          )}
        </ul>
       
      </div>  
    </nav>

    {loginWindow && (
      <>
      <Login
        setCookie={props.setCookie}
      />
      <button onClick={openRegister}>Register</button>
      </>
    )}

    {registerWindow && (
      <Register
        closeForm={closeRegister}
      />
    )}

    {}
    
    </>
  )
}

export default Nav;