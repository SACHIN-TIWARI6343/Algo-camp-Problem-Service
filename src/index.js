const express = require('express');
const { PORT } = require('./config/server.config');




const bodyParser = require('body-parser');
const { apiRouter } = require('./routes');
const { BaseError } = require('./errors/BaseError');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');


const app= express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())




// if any request comes and routes with /api, we mapp it to apiRouter
app.use('/api',apiRouter)



app.use(errorHandler);


app.listen(PORT,async()=>{
console.log(`Server started at ${PORT}` );
   await connectToDB();
   console.log("Succesfully connect to db");

  
})