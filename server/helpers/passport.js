const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


// Set up the Passport strategy:
  passport.use(
    new LocalStrategy((email,password,done) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user)=> {
        console.log("passport is working.");
        if(err) {
          return done(err);
        }
        if(!user){
          return done(null,false,{message: 'Incorrect username or password'});
        }
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword){
          return done(null,false, {message: 'Incorrect username or password'});
        }
        return done(null,user);
      })
    })
  );
  

// Serialize a user
  passport.serializeUser((user,done) => {
    process.nextTick(function() {
      cb(null, { id: user.id, name: user.name });
    });
  });

// Deserialize a user
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
