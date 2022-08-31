const userRouter = require('./users')
const mainRouter = require('./main')

function routes(app) {  
    
    app.use('/users', userRouter)

    app.use('/', mainRouter)
    
}

module.exports = routes