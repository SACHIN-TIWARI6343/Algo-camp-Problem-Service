const dotenv = require('dotenv'); //  dotenv file include

dotenv.config();// allow to reating enviroment variable

module.exports={
    PORT:process.env.PORT || 3000,  // if somebody get forget to save PORT value 
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    NODE_ENV: process.env.NODE_ENV || "development"
}