const getALLJobs = async (req, res) => {
  res.send("ALL Jobs");
};

const getJob= async (req, res) => {
  res.send("Single Job");
};
const createJob= async (req, res) => {
  res.send("Create Job");
};
const updateJobs= async (req, res) => {
  res.send("Update Job");
};
const deleteJobs= async (req, res) => {
  res.send("Delete Job");
};

module.exports = {
getALLJobs,
getJob,
deleteJobs,
updateJobs,
createJob
};
