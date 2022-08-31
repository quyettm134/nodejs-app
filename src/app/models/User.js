const mongoose  = require("mongoose");

const Schema = mongoose.Schema

const User = new Schema({ 
    name: String,
    age: Number,
    gender: String,
    avatar: String,
    description: String,
    slug: String
})

module.exports = mongoose.model('User', User)