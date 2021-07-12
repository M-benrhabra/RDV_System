const express = require('express')
const routerPerson = express.Router()
const { addPerson } = require('../controllers/Persons.controller')

routerPerson.post('/addPerson', addPerson)

module.exports = routerPerson