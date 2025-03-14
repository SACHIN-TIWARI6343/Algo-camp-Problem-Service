/*Connect to MongoDB using mongoose.connect()
Define a Schema (userSchema) to structure data
Create a Model (User)
Insert a new document using .save() or .create()*/

const mongoose = require('mongoose');

const problemSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be empty']
    },
    description:{
        type:String,
        required : [true,'Description cannot be emty']
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty cannot be empty'],
        default:'easy'
    },
    testCases:[{
        input:{
            type:String,
            required: true
        },
        output:{
            type:String,
            required: true
        }
    }],
    editorial:{
        type:String
    }
});
const Problem = mongoose.model('Problem',problemSchema) // create model 

module.exports = Problem; 