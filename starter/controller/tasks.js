const Task=require('../models/task')

const getAllTask = (req, res) => {
  res.send("completed the setup of controller");
};
const postTask = async (req, res) => {
  try {
    
    const task=await Task.create(req.body)
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({msg:error})
  }
};
const getTask = (req, res) => {
  res.json({id:req.params.id})
};
const updateTask = (req, res) => {
  res.send("put task set up is completed");
};
const deleteTask = (req, res) => {
  res.send("delete task set up is completed");
};

module.exports = {
     getAllTask, 
     postTask,
     getTask,
     updateTask,
     deleteTask
 };
