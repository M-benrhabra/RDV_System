const express = require('express')
const routerActivitys = express.Router()
const { addActivity, getAllActivitys } = require('../controllers/Activitys.controller')

// add Activity
routerActivitys.post('/addActivity', addActivity )

// get all Activitys
routerActivitys.get('/allActivitys', getAllActivitys)

module.exports = routerActivitys