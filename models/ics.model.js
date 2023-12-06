const mongoose = require("mongoose")
// const  Schema requier "mongoose"

const icsSchema = new mongoose.Schema({
    villaId : {
        type : String,
        required : true,
        unique : true
    },
    icsContent:{
        type : String
    }
},{
    timestamps: true
});

module.exports = mongoose.models.ics || mongoose.model('ics', icsSchema);