const Users = require('../models/User')
const { multipleDoc, singleDoc } = require('../../utils/mongoose')

class UserController {
    list(req, res, next) {
        Users.find({})
            .then(users => {
                res.render('users/list', {
                    users: multipleDoc(users)
                })
            })
            .catch(err => next(err))
    }
    details(req, res, next) {
        Users.findOne({ slug: req.params.slug })
            .then(user => {
                res.render('users/details', {
                    user: singleDoc(user)
                })
            })
            .catch(err => next(err))
    }
    create(req, res, next) {
        res.render('users/create')
    }
    store(req, res, next) {
        const newUser = new Users(req.body)
        newUser.save()
            .then(() => {
                res.redirect('/users')
            })
            .catch(err => next(err))
    }
}

module.exports = new UserController