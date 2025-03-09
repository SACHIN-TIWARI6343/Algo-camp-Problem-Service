const { BaseError } = require("./BaseError");

const {StatusCodes} = require('http-status-codes');

class InternalServererror extends BaseError{

    constructor(details){
        super("internal server error",StatusCodes.INTERNAL_SERVER_ERROR,`Somthing wentrong `,details)
    }
}
module.exports =Badrequest