const express = require('express')
const routerOrganism = express.Router()
const { addOrganism, getAllOrganism } = require('../controllers/Organism.controller')

// add Organism
routerOrganism.post('/addOrganism', addOrganism )

// get all Organism
routerOrganism.get('/allOrganism', getAllOrganism )

module.exports = routerOrganism