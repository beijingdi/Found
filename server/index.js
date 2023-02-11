const express = require("express");
const session = require("express-session");
const store = new session.MemoryStore();
const PORT = process.env.PORT || 3001;

const passport = require("passport");

const db = require("./db/db.js");

const usersRouter = require("./routes/users.js");


const app = express();
//Import passport config
require("./config/passport.js");
//session config
app.use(
  session({
    secret: "found",
    cookie: {maxAge: 300000000, secure:false},
    saveUninitialized: false,
    resave: false,
    store,
  })
);

// Passport Config
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/users',usersRouter(db));




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

