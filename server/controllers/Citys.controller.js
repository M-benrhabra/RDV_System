const Citys = require('../models/City.model')

exports.addCity = async (req, res) => {
    try {
        const city = await Citys.findOne({city_name : req.body.city_name})
        if (city) return res.status(403).json({message : "This City has Alredy Exist"})
        const newCity = new Citys({
            ...req.body
        })
       const citySaved = await newCity.save()
       console.log(citySaved)
       res.status(201).json({message : "City Saved"})
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.getAllCitys = async (req, res) => {
    try {
        const allCitys = await Citys.find()
        res.status(200).json(allCitys)
    } catch (error) {
        res.status(500).json(error)
    }
}