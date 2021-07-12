const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
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
    role : {
        type : String,
        enum : ["Admin", "Technician"],
        default : "Technician"
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
    id_organism : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Organism',
        required : true
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString("en-US")
    }
})

module.exports = mongoose.model("Users", userSchema)