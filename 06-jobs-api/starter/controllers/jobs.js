const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getALLJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  res.send("yash varshney");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJobs = async (req, res) => {
  res.send("Update Job");
};
const deleteJobs = async (req, res) => {
  res.send("Delete Job");
};

module.exports = {
  getALLJobs,
  getJob,
  deleteJobs,
  updateJobs,
  createJob,
};
