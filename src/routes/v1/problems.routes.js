const express= require('express')

const {problemController}= require('../../controller/index')


const problemRouter = express.Router();

// if any request comes and continue with /ping, we mapp it to v1router
problemRouter.get('/ping',problemController.pingProblemController)

problemRouter.get('/:id',problemController.getProblem);


problemRouter.get('/',problemController.getProblems)


problemRouter.post('/',problemController.addProblem);


problemRouter.delete('/:id',problemController.deleteProblem);



problemRouter.put(':id',problemController.updateProblem)




module.exports={
    problemRouter
}


 