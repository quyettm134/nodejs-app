const express = require('express')
const router = express.Router()
const mainController = require('../app/controllers/MainController')

router.use('/search', mainController.search)

router.use('/', mainController.home)

module.exports = router