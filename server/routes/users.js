const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = db.getUserWithEmail(email);
    if (!existingUser){
      return res.json({status: 401, message: "User does not exist."});
    }
    if (existingUser.password != password) {
      return res.json({status:401, message: "Incorrect Password."});
    }
    return res.json({status:200, id:user.id, name:user.name});
  });


  
  router.post('/register', (req, res) => {

  });


}



