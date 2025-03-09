const { BaseError } = require("./BaseError");

const {StatusCodes} = require('http-status-codes');

class  Notimplemented extends BaseError{

    constructor(methodName){
        super("Notemplemented",StatusCodes.NOT_IMPLEMENTED,`${methodName} Not Implemented`,{})
    }
}
module.exports = Notimplemented