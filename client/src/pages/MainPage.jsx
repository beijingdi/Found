import React from "react";

import classes_mainpage from "./MainPage.module.css";

import Calendar from "../components/Calendar";


function MainPage(){
  return (
    <>
      <div className = {`${classes_mainpage.top_page} row`}>
        <div><h1 className="test">Let's Thrive Together.</h1></div>
        <div><button>Book Now</button></div>
      </div>

      <div className="mission">
        <ul>
          <li>
            <h3>UNPLUG</h3>
            <p>Unplug and enjoy time away from digital distractions, and focus more on the present.</p>
          </li>
          <li>
            <h3>CONNECT</h3>
            <p>Reconnext with ourselves, the ocean, nature and other like-minded individuals.</p>
          </li>
          <li>
            <h3>RECHARGE</h3>
            <p>Recharge through daily yoga, water sports and activities,coaching sessions,seasonal menus, and comfortable accommodation.</p>
          </li>
        </ul>
      </div>

      <div className="Gallery">
        <h3>Photo Gallery</h3>

      </div>

      <div className="Calendar">
        <h3>Calendar</h3>
        {/* <Calendar/> */}
      </div>
    </>
  );
}


export default MainPage;