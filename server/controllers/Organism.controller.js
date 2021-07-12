const Organism = require('../models/Organism.model')

exports.addOrganism = async (req, res) => {
    try {
       const findOrganism = await Organism.findOne({organism_name : req.body.organism_name})
       if(findOrganism) return res.status(403).json({message : "This Organism has Alredy Exist"})

       const newOrganism = new Organism({
           ...req.body
       })
       const saveOrganism = await newOrganism.save()
       res.status(201).json({message : "Organism Saved"})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllOrganism = async (req, res) => {
    try {
       const allOrganism = await Organism.find()
       res.status(200).json(allOrganism) 
    } catch (error) {
        res.status(500).json(error)
    }
}