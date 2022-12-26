const express=require('express');

const router=express.Router();

const createDb=require('../config/db');

const bcrypt=require('bcrypt');

const User=require("../models/userModels");

const {
  validateName,
  validateEmail,
  validatePassword,
} = require("../utils/validators");
createDb.sync().then(()=>{
  console.log("DB is running....");
})
let users={
}

router.post("/signup",async (req,res)=>{
  try{
    const {name,email,password}=req.body;
    console.log(name,email,password);
  const userExist=await User.findOne({
    where:{
      email
    }
  });
    if(userExist){
      res.send("user exist");
    }
    if(!validateName(name)){
      res.send("Invalid name");
    }

    if(!validateEmail(email))
    {
      res.send("Invalid Email");
    }

    if(!validatePassword(password))
    {
      res.send("Invalid Password");
    }
    const Epassword= await bcrypt.hash(password,10);
    
   const  saveToDb=
     {
       name,email,password:Epassword
     }
    const createdUser=await User.create(saveToDb)
 return   res.status(201).send(createdUser);
  }catch(e)
  {
    console.log(e);
  }
});

module.exports=router