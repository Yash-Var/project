require('dotenv').config()
const { config } = require('dotenv');
const express=require('express');

const app=express();
const {transporter,options}=require('./email');
const Scheduler=require('node-cron');

const port =1338;

Scheduler.schedule("* * * * * *",()=>{
    console.log('Inside scheduler');
    transporter.sendMail(options,(err,info)=>{
        if(err) {
            console.error(err);
        }
        console.log('Email send with info=',info)
    })
});

app.listen(port,()=>{
    console.log('server is running ');
});
