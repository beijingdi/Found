import React,{useState}from "react";
import { NavLink } from "react-router-dom";
import nav_classes from './Nav.module.css';

import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";




const Nav = (props) => {
  const [user,setUser] = useState();
  const loggedIn = !!user;

  //display login/registeration form
  const [loginWindow, setLoginWindow] = useState(false);
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
      <a className={`${nav_classes.logo} navbar-brand`} href="#">FOUND.</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auro">
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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.name}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Book</a>
                <a class="dropdown-item" href="#">My Bookings</a>
                <a class="dropdown-item" href="#">Past Bookings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
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
        setUser={setUser}
        setLoginWindow = {setLoginWindow}
      />
      <button onClick={openRegister}>Register</button>
      </>
    )}

    {registerWindow && (
      <Register
        closeForm={closeRegister}
      />
    )}
  
    </>);

};

export default Nav;