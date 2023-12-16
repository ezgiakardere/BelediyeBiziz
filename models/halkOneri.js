const mongoose = require('mongoose');

const halkOneriSchema = new mongoose.Schema(
    {
        oneri:{
            type:String,
            required:true        
        }
    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model('HalkOneri', halkOneriSchema);