const userRouter = require('./users')
const mainRouter = require('./main')
const managementRouter = require('./management')

function routes(app) {  
    
    app.use('/users', userRouter)

    app.use('/management', managementRouter)

    app.use('/', mainRouter)
    
}

module.exports = routes