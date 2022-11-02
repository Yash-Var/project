const mongoose = require("mongoose");

const autoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provide"],
      },
      day:{
        type:Number,
        required:[true,"day must be provide"]
      },
      month:{
        type:Number,
        required:[true,"day must be provide"]
      },
      year:{
        type:Number,
        required:[true,"day must be provide"]
      },
      mail:{
        type:String,
        required:[true,"mail should not be empty"]
      }
});

module.exports=mongoose.model('auto',autoSchema)