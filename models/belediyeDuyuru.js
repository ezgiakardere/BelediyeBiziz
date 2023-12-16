const mongoose = require('mongoose');

const belediyeSchema = new mongoose.Schema(
    {
        duyuru:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('BelediyeDuyuru', belediyeSchema);