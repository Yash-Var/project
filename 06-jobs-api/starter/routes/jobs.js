const express=require('express')

const router=express.Router();

const {
    getALLJobs,
getJob,
deleteJobs,
updateJobs,
createJob
}=require('../controllers/jobs')

router.route('/').get(getALLJobs).post(createJob)
router.route('/:id').get(getJob).delete(deleteJobs).patch(updateJobs)

module.exports=router