const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");




module.exports = (db) => {

  router.get('/all', async(req,res) => {
    try {
      const users = await db.allUsers();
      res.json(users);
    } catch(err) {
      console.log(err);
    }
  });

  router.post(
    '/login', 
    passport.authenticate("local", {failuerRedirect:"/", failuerMessage: true}),
    (req,res,next) => {
      return res.json({status: 200, user: req.user});
    }
  );

  router.post('/register', async(req, res) => {
    const {name, email, password} = req.body;
    console.log(email)
    try {
      const user = await db.findUser(email);
      if (user) {
        console.log("User already exists!");
        return res.redirect('/');
      }

      // const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,10);
      const newUser = await db.createUser(name,email,hashedPassword);
      return res.json({status: 200, user:newUser});
    } catch (err) {
      res.status(500).json({message: err.message});
    }

  });

  router.post('/logout',(req,res) => {
    req.logout((err)=>{
      if(err) return next(err);
      res.redirect('/');
    });
  
  })
  return router;

}
