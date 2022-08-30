const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

router.use('/:slug', userController.show)

router.use('/', userController.index)

module.exports = router