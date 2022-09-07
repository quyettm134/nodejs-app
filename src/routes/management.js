const express = require('express')
const ManagementController = require('../app/controllers/ManagementController')
const router = express.Router()

router.get('/:id/edit', ManagementController.edit)

router.put('/:id', ManagementController.update)

router.get('/', ManagementController.index)

module.exports = router