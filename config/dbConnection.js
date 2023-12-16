const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Veri tabanı entegrasyonu başarıyla tamamlandı")

    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}


module.exports=connectDb