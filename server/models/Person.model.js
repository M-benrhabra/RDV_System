const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    first_name : {
        type : String,
        required : true,
        min : 4
    },
    last_name : {
        type : String,
        required : true,
        min : 3
    },
    username : {
        type : String,
        required : true,
        min : 4
    },
    birth_day : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true,
        min : 4
    },
    phone : {
        type : String,
        required : true,
        min : 4
    },
    email : {
        type : String,
        required : true,
        min : 6
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    black_listed : {
        type : Boolean,
        default : false
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString()
    }
})

module.exports = mongoose.model("Persons", personSchema)