const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    city_name : {
        type : String,
        required : true,
        min : 2
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString("en-US")
    }
})

module.exports = mongoose.model("Citys", citySchema)