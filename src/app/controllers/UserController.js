const Users = require('../models/User')
const { multipleDoc } = require('../../utils/mongoose')

class UserController {
    // GET 
    index(req, res, next) {
        Users.find({})
            .then(users => {
                res.render('user', {
                    users: multipleDoc(users)
                })
            })
            .catch(err => next(err))
    }

    show(req, res) {
        res.render('user')
    }

}

module.exports = new UserController