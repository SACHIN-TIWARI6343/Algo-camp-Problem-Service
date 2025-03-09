const { BaseError } = require("./BaseError");

const {StatusCodes} = require('http-status-codes');

class Badrequest extends BaseError{

    constructor(propertyName){
        super("Badrequest",StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName} provided`)
    }
}
module.exports =Badrequest