const express= require('express');
const { v1Router } = require('./v1');



const apiRouter=express.Router();


// if any request comes and continue with /v1, we mapp it to v1router

apiRouter.use('/v1',v1Router);



module.exports={
    apiRouter
}