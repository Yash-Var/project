const express=require('express');
const { get } = require('mongoose');

const router = express.Router()

const {getAllTask,postTask,getTask,updateTask,deleteTask}=require('../controller/tasks')

router.route('/').get(getAllTask).post(postTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router;