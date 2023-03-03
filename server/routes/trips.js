const express = require('express');
const router = express.Router();

module.exports=(db)=>{

  router.get('/all',async(req,res)=>{
    try{ 
      const trips = await db.allTrips();
      res.json(trips);
    } catch(err){
      console.log(err.message);
    }
  });

  router.get('/:tripId',async(req,res)=>{
    try{
      const trip = await db.getTrip(req.params.tripId);
      res.json(trip);
    }catch(err){
      console.log(err.messages);
    }
  });
  //book a trip
  router.post('/:tripId',(req,res)=>{

  });
  //cancel booking
  router.delete('/:tripId',(req,res)=>{

  });



  return router;
}