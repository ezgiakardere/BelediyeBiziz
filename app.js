const express = require('express');
const app = express();
const port = 3000;

const connectDb=require('./config/dbConnection')
connectDb()



const halkRoute=require('./routers/halkRoutes')


app.use(express.json())

app.use("/halk",halkRoute)




app.listen(port,console.log(`Belediye uygulaması ${port} portunda hizmete başlamıştır`));