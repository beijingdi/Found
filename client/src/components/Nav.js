import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.module.css';

const Nav = (props) => {
  return(
    <nav>
      <span> FOUND.</span>
      <ul className="nav">
        <li className="nav-item">
          <NavLink>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink>Corporate Retreats</NavLink>
        </li>
        <li className="nav-item">
          <NavLink>Gallery</NavLink>
        </li>
        <li className="nav-item">
          <button>Book Now</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;