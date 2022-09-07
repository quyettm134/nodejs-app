const Users = require('../models/User')
const { multipleDoc, singleDoc } = require('../../utils/mongoose')

class ManagementrController {
    index(req, res, next) {
        Users.find({})
            .then(users => res.render('users/management', {
                users: multipleDoc(users)
            }))
            .catch(err => next(err))
    }

    edit(req, res, next) {
        Users.findById(req.params.id)
            .then(user => res.render('users/edit', {
                user: singleDoc(user)
            }))
            .catch(err => next(err))
    }

    update(req, res, next) {
        Users.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/management'))
            .catch(err => next(err))
    }

    remove(req, res, next) {
        Users.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/management'))
            .catch(err => next(err))
    }
}

module.exports = new ManagementrController