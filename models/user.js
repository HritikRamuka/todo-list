const mongoose = require('mongoose');
const passport = require('passport');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,

})

mongoose.model('users', userSchema)