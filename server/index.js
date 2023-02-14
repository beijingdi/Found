require("dotenv").config();

const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser')
const store = new session.MemoryStore();

const config = require('./config.json');
const PORT = process.env.PORT || 3001;

const passport = require("passport");

const db = require("./db/db.js");

const usersRouter = require("./routes/users");


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Import passport config
require("./helpers/passport.js");
//session config
app.use(
  session({
    secret: config.secret,
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

