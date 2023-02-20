const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");




module.exports = (db) => {

  router.get('/all', async(req,res) => {
    try {
      const users = await db.allUsers();
      // console.log(req.session);
      // if (req.session.viewCount) {
      //   req.session.viewCount = req.session.viewCount + 1;
      // } else {
      //   req.session.viewCount = 1;
      // }
      // res.json(req.session.viewCount);
      res.json(users);
    } catch(err) {
      console.log(err);
    }
  });

  router.post('/login', 
  passport.authenticate('local', {failureRedirect: '/'}),
  (req,res,next) => {
    console.log("session");
    console.log(req.session);
    res.redirect("/");
    // console.log(req.body);
    // console.log("post request sent");
    //   passport.authenticate("local",(err,user,info) => {
    //     console.log("passport authentication starts");
    //     console.log({err,user,info});
     
    //     if(err) throw err;
       
    //     if (!user) res.send("No User Exists");

    //       req.logIn(user, err => {
    //         if (err) throw err;
    //         res.send('Successfully Authenticated');
    //         console.log(req.user);
    //       })
    //   })(req,res,next);
  });

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
      await db.createUser(name,email,hashedPassword);
      res.redirect("/");
    } catch (err) {
      res.status(500).json({message: err.message});
    }

  });

  return router;

}



