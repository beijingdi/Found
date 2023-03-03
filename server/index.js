require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
//const bodyParser = require('body-parser');
const store = new session.MemoryStore();

const config = require('./config.json');
const PORT = process.env.PORT || 3001;

const passport = require("passport"); 
const crypto = require("crypto");
const cookieParser = require('cookie-parser');

const db = require("./db/db.js");

const usersRouter = require("./routes/users");
const tripsRouter = require('./routes/trips');




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors({ 
//   origin: "http://localhost:3000",
//   credentials: true
// }));


//session config
app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    store,
    cookie:{
      maxAge: 1000 * 60 * 60 * 24 
    }
  })
);
app.use(cookieParser(config.secret));

// Passport Config
 
require("./helpers/passport");
app.use(passport.initialize());
app.use(passport.session());
// app.use((req,res,next) => {
//   console.log(req.session);
//   console.log(req.user);
//   next();

// });


//Routes
app.use('/users',usersRouter(db));
app.use('/trips',tripsRouter(db));




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

 