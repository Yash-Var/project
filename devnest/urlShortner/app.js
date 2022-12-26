const express=require('express')

const app=express();

const port=1337;

app.listen(port,()=>{
    console.log(`${port} is running `)
})