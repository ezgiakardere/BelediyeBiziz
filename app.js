const express = require('express');
const app = express();
const port = 3000;



app.use("/",()=>{
    console.log("Deneme");
})




app.listen(port,console.log(`Belediye uygulaması ${port} portunda hizmete başlamıştır`));