const mongoose = require('mongoose');

const halkSchema = new mongoose.Schema(
    {
        oneri:{
            type:String,
            required:false        
        }
    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model('Halk', halkSchema);