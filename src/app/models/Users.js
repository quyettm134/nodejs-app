const mongoose  = require("mongoose");

const Schema = mongoose.Schema

const User = new Schema({ 
    name: String,
    age: Number,
    gender: String,
    avatar: String,
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', User)