const userRouter = require('./user')
const mainRouter = require('./main')

function routes(app) {  
    
    app.use('/user', userRouter)

    app.use('/', mainRouter)
    
}

module.exports = routes