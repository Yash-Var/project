const nodemailer = require("nodemailer");
const express=require('express')
const auto = require('../models/auto')

const logger=async(req,res, next)=>{

const day=new Date().getDate()
const month=new Date().getMonth()+1

console.log(day,month);

  const queryObject={}
  if(day){
    queryObject.day=day
  }
  if(month){
    queryObject.month=month
  }
  
  try {
    const products =await auto.find(queryObject)
     res.status(200).json({ products,nbHits:products.length})
   console.log(products[0].mail);
     const mail = async () => {
   
       // console.log(gen);
       const config = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
           user: "yash.2125cs1155@kiet.edu",
           pass: "algwvnhnhhnadaui",
         },
       });
        await config.sendMail({
         form: "test@gmail.com",
         to: products[0].mail,
         subject: "test",
         text: "super happy",
         // html:"<h1>This is html Demo</h1>",
       });
     };
     
     mail().catch((e) => console.log(e));
  } catch (error) {
   console.log(error); 
  }
  
  

  console.log("yash varshney");
  next()
}

module.exports=logger