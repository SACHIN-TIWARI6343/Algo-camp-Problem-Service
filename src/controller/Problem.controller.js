
const {StatusCodes} =require('http-status-codes')                        // implement status code in this file
const Notimplemented = require('../errors/notimplemented') 
function pingProblemController(req,res)
{
    return res.json({message:"ping controller up"})
}

function addProblem(req,res, next){
    try{
      // nothing implemented
      throw new Notimplemented('add problem')
    }catch(error){
         next(error);
    }
}



function getProblem(req,res){
    try{
        // nothing implemented
        throw new Notimplemented('add problem')
      }catch(error){
           next(error);
      } 
}


function getProblems(req,res){
    try{
        // nothing implemented
        throw new Notimplemented('add problem')
      }catch(error){
           next(error);
      }
}

function deleteProblem(req,res){
    try{
        // nothing implemented
        throw new Notimplemented('add problem')
      }catch(error){
           next(error);
      }
}


function updateProblem(req,res){
    try{
        // nothing implemented
        throw new Notimplemented('add problem')
      }catch(error){
           next(error);
      }
}


module.exports={

     addProblem,
     getProblem,
     getProblems,
     deleteProblem,
     updateProblem,
     pingProblemController

}