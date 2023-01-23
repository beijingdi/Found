import React from "react";
import Calendar from "react-calendar";
import events from "../events.js";
import  classes_scheduler from "./Scheduler.module.css";
// import 'react-calendar/dist/Calendar.css';





function Scheduler (){

  function highlightEventDays(date) {
    let startDate = events[0].start.setHours(0,0,0,0);
    let endDate = events[0].end.setHours(0,0,0,0);
    let eachDay = date.date.setHours(0,0,0,0);

    console.log(startDate);
    console.log(endDate);
    console.log(eachDay);

    if (eachDay > startDate && eachDay < endDate){
      return classes_scheduler["eventDays"];
    }
    if (eachDay == startDate || eachDay == endDate) {
      return classes_scheduler["eventStartEndDays"];
    }
    return {}
  }
  
  console.log(classes_scheduler["eventDays"])

  return(
    <>
    <div>
      <Calendar
      className={classes_scheduler["react-calendar"]}
      tileClassName={highlightEventDays}
      />
      

    </div>

    <div>
      <h4>Events:</h4>
    </div>
    {/* <Datepicker
    select="range"
    rangeHighlight={true}
    showRangeLabels={true}
    /> */}
    </>
  );
}
export default Scheduler;