import React from "react";
import { NavLink } from "react-router-dom";
import nav_classes from './Nav.module.css';

import Register from "./auth/Register.jsx";




const Nav = (props) => {
  const loggedIn = !!props.cookies.user;
  return(
    <>

    <nav className="navbar navbar-expand-lg">

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
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Book Now</a>
          </li>
        </ul>
      </div>  
    </nav>
    </>
  )
}

export default Nav;