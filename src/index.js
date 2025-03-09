const express = require('express');
const { PORT } = require('./config/server.config');

const bodyParser = require('body-parser');
const { apiRouter } = require('./routes');

const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())


app.use('/api',apiRouter)



app.listen(PORT,()=>{
console.log(`Server started at ${PORT}` );
})