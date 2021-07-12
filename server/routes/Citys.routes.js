const express = require('express')
const routerCitys = express.Router()
const { addCity, getAllCitys } = require('../controllers/Citys.controller')

// add city
routerCitys.post('/addCity', addCity)

// get all citys
routerCitys.get('/allCitys', getAllCitys)

module.exports = routerCitys