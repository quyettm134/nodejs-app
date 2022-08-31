const Users = require('../models/User')
const { multipleDoc, singleDoc } = require('../../utils/mongoose')

class UserController {
    // GET 
    index(req, res, next) {
        Users.find({})
            .then(users => {
                res.render('users', {
                    users: multipleDoc(users)
                })
            })
            .catch(err => next(err))
    }

    show(req, res) {
        res.render('user')
    }

    details(req, res, next) {
        Users.findOne({ slug: req.params.slug })
            .then(user => {
                res.render('details', {
                    user: singleDoc(user)
                })
            })
            .catch(err => next(err))
    }

}

module.exports = new UserController