const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/nodejs_server')
        console.log('Connected to NodeJS Server!')
    } catch (error) {
        console.error('Error connecting to NodeJS Server!')
    }
}

module.exports = { connect }