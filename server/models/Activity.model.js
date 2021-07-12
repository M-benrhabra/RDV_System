const mongoose = require('mongoose');
const Schema = mongoose.Schema

const activitySchema = new Schema({
    activity_name : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        default : new Date().toLocaleDateString("en-US")
    }
})

module.exports = mongoose.model("Activitys",  activitySchema)