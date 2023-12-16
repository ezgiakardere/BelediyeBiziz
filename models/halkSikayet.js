const mongoose = require('mongoose');

const halkSikayetSchema = new mongoose.Schema(
    {

        sikayet:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model('HalkSikayet', halkSikayetSchema);