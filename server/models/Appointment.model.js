const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    appointment_date : {
        type : Date,
        required : true
    },
    start_hour : {
        type : Date,
        required : true
    },
    end_hour : {
        type : Date,
        required : true
    },
    taked : {
        type : Boolean,
        default : false
    },
    id_organism : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Organism',
        required : true
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString()
    }
})

module.exports = mongoose.model("Appointment", appointmentSchema)