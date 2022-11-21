const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/userData");

router.get("/", (req, res) => {
  res.send("hell o world");
});

router.post("/register", async (req, res) => {
  // by promise 👍

  //   const { name, email, phone, work, password, cpassword } = req.body;
  //   if(!name || !email || !phone || !work || !password || !cpassword){
  //     return res.status(422).json({error:"Pls filled the filed property "})
  //   }
  // User.findOne({email:email})
  //   .then((result) => {
  //     if(result){
  //         return res.status(422).json({error:"Email already exits"})
  //     }
  //     const newUser=new User({name,email,phone,work,password,cpassword});

  //     newUser.save().then(()=>{
  //         res.status(201).json({message:"User is registered successfully"});
  //     }).catch((err)=>res.status(500).json({error:"failed to registered"}));
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  // Aync await 👍
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Pls filled the filed property " });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exits" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "user registerd successfully" });
    } else {
      res.status(500).json({ error: "Failed to registered" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to registered" });
  }
});
module.exports = router;
