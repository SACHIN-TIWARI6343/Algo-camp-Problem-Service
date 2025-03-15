
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
            throw new NotFound("Problem", id)
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
            
        }  
    }

}
 

module.exports = ProblemRepository;