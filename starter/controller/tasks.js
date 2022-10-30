const Task = require("../models/task");

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: TasId } = req.params;
    const task = await Task.findOne({ _id: TasId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${TasId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${TaskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
 try {
  const { id: TaskID } = req.params;
  const task=await Task.findByIdAndUpdate({_id:TaskID},req.body)
  
  res.status(200).json({task})
 } catch (error) {
  
 }
};
module.exports = {
  getAllTask,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
