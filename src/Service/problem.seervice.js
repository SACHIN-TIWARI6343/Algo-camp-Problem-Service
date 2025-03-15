const sanitizemarkdownContent = require("../utils/markdownSanitizer.js");


class ProblemService {

    constructor(problemRepository){

        this.problemRepository = problemRepository;
      //  console.log("ProblemRepository instance:", this.problemRepository); // Check yeh print hota hai ya nahi
      //  console.log("Available methods:", Object.keys(this.problemRepository));

    }
    

   

    async createProblem(problemData){
        // 1.Sanitize the markdown for description
       try {

         problemData.description = sanitizemarkdownContent(problemData.description);
        

         const problem = await this.problemRepository.CreateProblem(problemData);
 
         console.log(problem);

         return problem;

       } catch (error) {
           console.log(error);
           throw error;
       } 


    }
    async getAllProblems(){
      try {
        const problems = await this.problemRepository.getAllproblems();
        return problems;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    async getProblem(problemId){
     // console.log(problemId);
      const problem = await this.problemRepository.getProblem(problemId);
      return problem;
    }

}
 
module.exports = ProblemService;