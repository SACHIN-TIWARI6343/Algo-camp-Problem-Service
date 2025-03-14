const { BaseError } = require("../errors/BaseError");

const {StatusCodes}= require('http-status-codes')


function errorHandler(err ,req, res, next){

    if(err  instanceof  BaseError){
        return res.status(err.statuscode).json({
            succes :false,
            message:err.message,
            error: err.details,
            data:{}
            
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        succes :false,
        message:"Something went wrong",
        error: err,
        data:{}  //  because this is an excepton so no data is going to be provided 
        
    });
}

module.exports = errorHandler;