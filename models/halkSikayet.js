const mongoose = require('mongoose');

const halkSchema = new mongoose.Schema(
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


module.exports = mongoose.model('Halk', halkSchema);