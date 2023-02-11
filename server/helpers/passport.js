const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


// Set up the Passport strategy:
  passport.use(
    new LocalStrategy((email,password,done) => {
      db.findUser(email, async (err,user) => {
        if(err) {
          return done(err);
        }
        if(!user){
          return done(null,false);
        }
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword){
          return done(null,false);
        }
        return done(null,user);
      })
    })
  );
  

// Serialize a user
  passport.serializeUser((user,done) => {
    done(null,user.id);
  });

// Deserialize a user
  passport.deserializeUser((id,done) => {
    db.findById(id, (err,user) => {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  });
