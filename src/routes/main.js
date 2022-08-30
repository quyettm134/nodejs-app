const express = require('express')
const router = express.Router()
const mainController = require('../app/controllers/MainController')

router.get('/search', mainController.search)

router.get('/', mainController.home)

module.exports = router