const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organismSchema = new Schema({
    organism_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true
    },
    id_activity : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Activitys',
        required : true
    },
    id_city : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Citys',
        required : true
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString("en-US")
    }
})

module.exports = mongoose.model("Organism", organismSchema)