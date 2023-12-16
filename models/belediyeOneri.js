const mongoose = require('mongoose')

const belediyeOneriSchema = new mongoose.Schema(
    {
        oneri:{
            type:String,
            required:true
        },
        aciklama:{
            type:String,
            required:true
        },
        uyumluluk:{
            type:String,
            required:true

        },
        anahtarkelimeler:{
            type:String,
            required:true
        },
        ayrintilar:{
            type:String,
            required:true
        },
        entegadimlar:{
            type:String,
            required:true
        },
        zamancizgi:{
            type:String,
            required:true
        },
        toplambutce:{
            type:decimal,
            required:true
        }
        

    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('BelediyeOneri',belediyeOneriSchema)