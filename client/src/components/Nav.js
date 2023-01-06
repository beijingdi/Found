import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.module.css';

const Nav = (props) => {
  return(
    <nav>
    {/* <p>I am Nav</p> */}
      <span> FOUND.</span>
      <ul class="nav">
        <li class="nav-item">
          <NavLink>About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink>Corporate Retreats</NavLink>
        </li>
        <li class="nav-item">
          <NavLink>Gallery</NavLink>
        </li>
        <li class="nav-item">
          <button>Book Now</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;