const express = require("express");
const router = express.Router();
const mongoose=require('mongoose')


const User = require("../models/userData");

router.get("/", (req, res) => {
  res.send("hell o world");
});

router.post("/register",(req, res) => {

  const { name, email, phone, work, password, cpassword } = req.body;
  if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error:"Pls filled the filed property "})
  }
User.findOne({email:email})
  .then((result) => {
    if(result){
        return res.status(422).json({error:"Email already exits"})
    }
    const newUser=new User({name,email,phone,work,password,cpassword});

    newUser.save().then(()=>{
        res.status(201).json({message:"User is registered successfully"});
    }).catch((err)=>res.status(500).json({error:"failed to registered"}));
  }).catch((err) => {
    console.log(err);
  });
});
module.exports = router;
