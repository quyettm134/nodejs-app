const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

router.post('/store', userController.store)

router.get('/create', userController.create)

router.get('/:slug', userController.details)

router.get('/', userController.list)

module.exports = router