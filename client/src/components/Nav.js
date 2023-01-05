import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return(
    <>
    {/* <p>I am Nav</p> */}
    <p> FOUND.</p>
    <NavLink>About</NavLink>
    <NavLink>Corporate Retreats</NavLink>
    <NavLink>Gallery</NavLink>
    <button>Book Now</button>
    </>
  )
}

export default Nav;