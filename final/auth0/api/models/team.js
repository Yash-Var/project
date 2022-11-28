const mongoose = require("mongoose");

const team = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provide"],
  },
  email: {
    type: String,
    required: [true, "mail should not be empty"],
  },
  branch:{
    type:String,
    required:[true,"Branch should not be empty"]
  },
  year:{
    type:Number,
    required:[true,"year should not be empty"]
  },
  designation:{
    type:String,
    required:[true,"Designation should not be empty"]
  }
});

module.exports = mongoose.model("team", team);
