const dotenv = require('dotenv'); //  dotenv file include

dotenv.config();// allow to reating enviroment variable

module.exports={
    PORT:process.env.PORT
}