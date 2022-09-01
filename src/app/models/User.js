const mongoose  = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const User = new Schema({ 
    name: String,
    age: Number,
    gender: String,
    avatar: String,
    description: String,
    slug: { type: String, slug: 'name', unique: true }
})

module.exports = mongoose.model('User', User)