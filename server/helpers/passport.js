const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../db/db.js");


// Set up the Passport strategy:

const customFields = {
  usernameField: 'email',
  passwordField: 'password'
} 

const verifyCallback = async (username,password,done) => {
  try {
    const user = await db.findUser(username);
    if (!user) {return done(null,false)}
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (matchedPassword) {
      return done(null,user);
    } else {
      return done(null,false);
    }
  } catch (err) {
    done(err);
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);


  passport.serializeUser((user,done) => {
    done(null,user.email);
  });

  passport.deserializeUser(async (email, done)=> {
    try {
      const user = await db.findUser(email);
      done(null,user);
    } catch (err) {
      done(err);
    }
  });

 
