const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    id_person : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Persons',
        required : true
    },
    id_appointment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment',
        required : true
    },
    valid : {
        type : Boolean,
        default : false
    },
    respected : {
        type : Boolean,
        default : false
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString()
    }
})

module.exports = mongoose.model("Appointment", appointmentSchema)