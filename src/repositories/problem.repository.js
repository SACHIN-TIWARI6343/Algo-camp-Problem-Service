
const logger = require('../config/logger.config');
const NotFound = require('../errors/notfound.error');
const {Problem}  = require('../models')


class ProblemRepository {

   


    async  CreateProblem(problemData){
        try {

           //throw new {"err":"some error"}
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases)? problemData.testCases :[]
            }
        )
        return problem; 
           
        } catch (error) {
            console.log(error); 
            throw error;
        }
    }
        async getAllproblems(){
            try {
               // throw "error";
             const problems = await Problem.find({});
             return problems;

            } catch (error) {
                console.log(error);
                throw error;
            }
  
    }     
     
    async getProblem(id){
        try {
           
            const problem = await Problem.findById(id);
            
            if(!problem){
                logger.error(`Problem with id:${id} not found in the db`)
            throw new NotFound("Problem", id)
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
            
        }  
    }
    async deleteProblem_by_id(id){
        try {
             
         const deleteproblem= await Problem.findByIdAndDelete(id);
         if(!deleteproblem){
           throw new NotFound("Problem",id)
         }
         return deleteproblem;
       
         } catch (error) {
           throw error
         } 
      }
   

}
 

module.exports = ProblemRepository;