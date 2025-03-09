const express= require('express');
const { problemRouter } = require('./problems.routes');



const v1Router = express.Router();

// if any request comes and continue with /problems, we mapp it to problems

v1Router.use('/problems',problemRouter)

module.exports={
    v1Router
}