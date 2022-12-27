const express=require('express')

const app=express();

const shortUrl=require('./routes/url')

const home=require('./routes/home')

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.use("/urlapi",shortUrl);

app.use('/',home)

const port=1337;

app.listen(port,()=>{
    console.log(`${port} is running `)
})