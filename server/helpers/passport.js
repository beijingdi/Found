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


// module.exports = (passport) => {
//   passport.use(
//     new LocalStrategy(async(email,password,done) => { 
//       console.log("local strategy starting;");
//       try { 
//         console.log("local strategy starting");
//         const user =  await db.findUser(email);
//         console.log(user);
//         if(!user) return done(null,false,{message: 'Incorrect username or password'});
//         const matchedPassword = await bcrypt.compare(password, user.password);
//         console.log("below is the result of password match");
//         console.log(matchedPassword);
//         if(!matchedPassword) return done(null,false, {message: 'Incorrect username or password'});
//         return done(null,user);
//       } catch(err){
//         return done(err);
//       }
//     })
//   );

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

 
  



// Deserialize a user
