const { BaseError } = require("../errors/BaseError");

const {statuscode}= require('http-status-codes')


function errorHandler(err ,req, res, next){

    if(err  instanceof  BaseError){
        return res.status(err.statuscode).json({
            succes :false,
            message:err.message,
            error: err.details,
            data:{}
            
        });
    }

    return res.status(err.statuscode).json({
        succes :false,
        message:err.message,
        error: err.details,
        data:{}  //  because this is an excepton so no data is going to be provided 
        
    });
}

module.exports = errorHandler;