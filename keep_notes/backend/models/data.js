const mongoose = require("mongoose");

const data = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Name must be provide"],
  },
  content: {
    type: String,
    required: [true, "emai must be provide"],
  },
});
const Data = mongoose.model("keep", data);
module.exports = Data;
