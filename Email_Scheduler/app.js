const express=require('express')
const app=express();

const Scheduler=require('node-cron')

const port =1338;

Scheduler.schedule("* * * * * *",()=>{
    console.log('Inside scheduler');
})

app.listen(port,()=>{
    console.log('server is running ');
})