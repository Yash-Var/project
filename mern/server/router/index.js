const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

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
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "user registerd successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to registered" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Pls filled the data" });
    }
    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin, password, userLogin.password);
    const token=await userLogin.generateAuthToken();
    console.log(token);
    res.cookie("jwtoken",token,{
      expires:new Date(Date.now()+25892000000),
      httpOnly:true
    }); 
    if (userLogin) {
      // console.log("yash varshney");
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(400).send({ error: "Invalid details yash" });
      } else {
        res.json({ message: "user Login successfully" });
      }
    } else {
      res.status(400).send({ error: "Invalid details varshney" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
