const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
// const dotenv = require("dotenv")

// const keys = require('./config/keys');
require("dotenv").config()
const cookieSession = require('cookie-session');
const passport = require('passport');
 require('./models/user');


require('./services/passport');




const app = express();
// dotenv.config();

app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
    auth: {
      user: process.env.MONGO_DB_USER,
      password: process.env.MONGO_DB_PASSWORD
    }
  })
// mongoose.connect(encodeURI(process.env.mongoURI));

/**
 * sets max age of cookie and encrypts it
 */
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30days
        keys: [process.env.cookieKey]
    })
);

/**
 * initializes cookies to handle authentication
 */
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);