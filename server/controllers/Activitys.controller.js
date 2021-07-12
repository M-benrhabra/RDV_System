const Activitys = require('../models/Activity.model')

exports.addActivity = async (req, res) => {
    try {
        const findActivity = await Activitys.findOne({activity_name : req.body.activity_name})
        if (findActivity) return res.status(403).json({message : "This Activity has Alredy Exist"})

        const newActivity = new Activitys({
            ...req.body
        })
        const saveActivity = await newActivity.save()
        res.status(201).json({message : "Activity Saved"})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllActivitys = async (req, res) => {
    try {
        const allActivitys = await Activitys.find()
        res.status(200).json(allActivitys)
    } catch (error) {
        res.status(500).json(error)
    }
}