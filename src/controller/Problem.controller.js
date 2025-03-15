
const Notimplemented = require('../errors/notimplemented') 

const {ProblemService} = require('../Service');
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const temp= new ProblemRepository();


const problemService = new ProblemService( temp)



function pingProblemController(req,res)
{
    return res.json({message:"ping controller up"})
}


async  function addProblem(req,res, next){
       try{  

        const newproblem = await problemService.createProblem(req.body);
 

        console.log(newproblem);
       return  res.status(StatusCodes.CREATED).json({
         success: true,
         message:'Succsefully created a new problem',
         error:{},
         data : newproblem
      })
      }catch(error){
         next(error);
      }
}



  async function getProblem(req,res,next){
    try{
        const problem = await  problemService.getProblem(req.params.id.trim())
        console.log(problem);
         return res.status(StatusCodes.OK).json({
          sucess:true,
          error:{},
          message:" Sucessfully fetched a problem",
          data: problem
         })
      }catch(error){
           next(error);
      } 
}


async  function getProblems(req,res,next){
 
  
      try {
      const response = await problemService.getAllProblems();

      console.log(response);

      return res.status(StatusCodes.OK).json({
       success: true,
       message: "Succesfully feated all the problems",
       error : {},
       data:response
   
     });
     } catch (error) {

       next(error)

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