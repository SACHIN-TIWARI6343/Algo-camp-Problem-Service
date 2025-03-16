const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
const { collection } = require('../models/problem.model');
require ('winston-mongodb')

const allowedTransports=[];

allowedTransports.push(new winston.transports.Console({
    format : winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY_MM_DD HH:mm:ss'
        }),
        // Second argument to the combine methos ,which defines what is exactly going to be printed in log
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}))


allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection: 'logs'
}))


const logger =winston.createLogger({


    format : winston.format.combine(

      winston.format.timestamp({
         format:"YYYY-MM-DD HH:mm:ss"
      }),


      winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]:${log.message}`)

    ),
    transports :allowedTransports
    
})

module.exports = logger