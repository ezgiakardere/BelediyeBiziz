const mongoose = require('mongoose');

const halkSchema = new mongoose.Schema(
    {
        istek:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model('Halk', halkSchema);