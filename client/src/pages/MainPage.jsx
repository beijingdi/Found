import React from "react";

import classes_mainpage from "./MainPage.module.css";

import Gallery from "../components/Gallery";
import Scheduler from "../components/Scheduler";


function MainPage(){
  return (
    <>
      <div className = {`${classes_mainpage.top_page}`}>
        <span><h1>Let's Thrive Together.</h1></span>
        <div><button>Book Now</button></div>
      </div>

      <div className={`${classes_mainpage.mission} row`}>
        <div className={`${classes_mainpage.card} col-md-4`}>
          <h3>UNPLUG</h3>
          <div>Unplug and enjoy time away from digital distractions, and focus more on the present.</div>
        </div>
        <div className={`${classes_mainpage.card} col-md-4`}>
          <h3>CONNECT</h3>
          <div>Reconnext with ourselves, the ocean, nature and other like-minded individuals.</div>
        </div>
        <div className={`${classes_mainpage.card} col-md-4`}>
          <h3>RECHARGE</h3>
          <div>Recharge through daily yoga, water sports and activities,coaching sessions,seasonal menus, and comfortable accommodation.</div>
        </div>
      </div>

      <div className="Gallery">
        <h3>Photo Gallery</h3>
        <Gallery/>
      </div>

      <div className="Calendar">
        <h3>Calendar</h3>
        <Scheduler/>
      </div>
    </>
  );
}


export default MainPage;