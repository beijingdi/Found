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
    passport.authenticate("local", {failuerRedirect:"/login"}),
    async (req, res) => {
      res.redirect("/");
    }
  );



  router.post('/register', async(req, res) => {
    const {email, password, name} = req.body;
    console.log(email)
    try {
      const user = await db.findUser(email);
      if (user) {
        console.log("User already exists!");
        return res.redirect('/');
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      await db.createUser(name,email,hashedPassword);
      res.redirect("/");
    } catch (err) {
      res.status(500).json({message: err.message});
    }

  });

  return router;

}



