import React from "react";
import axios from "axios";
import Calendar from "react-calendar";
import events from "../events.js";
import  classes_scheduler from "./Scheduler.module.css";
// import 'react-calendar/dist/Calendar.css';





function Scheduler (){
  let event = events[0]

  let startTime = event.start;
  let endTime = event.end

  

  function highlightEventDays(date) {
    let startDate = startTime.setHours(0,0,0,0);
    let endDate = endTime.setHours(0,0,0,0);
    let eachDay = date.date.setHours(0,0,0,0);


    if (eachDay > startDate && eachDay < endDate){
      return classes_scheduler["eventDays"];
    }
    if (eachDay == startDate || eachDay == endDate) {
      return classes_scheduler["eventStartEndDays"];
    }
    return {}
  }
  
  let activities = events[0].description.map(activity => {return (<div>{activity}</div>)});

  return(
    <>
    <div>
      <Calendar
      className={classes_scheduler["react-calendar"]}
      tileClassName={highlightEventDays}
      />
    </div>

    <div>
      <div>Start: {startTime.toLocaleString()}</div>
      <div>End: {endTime.toLocaleString()}</div>
      <div>From {event.price}</div>
      <div>{event.available_spots} spots left ({event.total_spots} spots total)</div>
      {activities}
    </div>

    </>
  );
}
export default Scheduler;