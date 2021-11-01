const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const mongoose = require('mongoose');
const User = mongoose.model('users');


/**
 * serializes mongoID on user to be set into cookie
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
})


 /**
  * deserializes id from cookie to verify user in DB
  */
passport.deserializeUser((id, done)=> {
    User.findById(id)
    .then(user => {
        done(null, user)
    })
})


/**
 * Configures project credentials for google OAuth
 * Checks to see if user already exists in DB,
 * if not, creates new user
 */
passport.use( new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/auth/google/todolist",
			userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo",
            proxy:true
    
  },
    async (accessToken, refreshToken, profile, done)  =>{
        const existingUser = await User.findOne({googleId: profile.id})
            if(existingUser) {
                return done(null, existingUser);
       
    }
            const user = await new User({googleId: profile.id}).save()
            done(null, user)
            }
 
))



// function(request, accessToken, refreshToken, profile, done) {
//     function(request, accessToken, refreshToken, profile, done) {
//         profile.identifier=profile.id;
//         return done(null, profile);