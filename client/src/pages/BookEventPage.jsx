import React,{useState,useEffect} from "react";
import axios from "axios";


import Scheduler from "../components/Scheduler";

const BookEventPage = () => {

  const [trips,setTrips] = useState();

  useEffect(()=>{
    const loadTrips = async() => {
      try{
        const allTrips = await axios.get('/trips/all');
        setTrips(allTrips.data);
      }catch(err){
        console.log(err.message);
      }
    }
    loadTrips();
  },[]);



 
 
    
  

  // try{
  //   await axios.get('/trips/all');
  // } catch(err){
  //   console.log(err.messages);
  // }
  
 
  
  return(
    <>
     <h2>Book Events</h2>
     <Scheduler/>
    
    </>
  )
}

export default BookEventPage;