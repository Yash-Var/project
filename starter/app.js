const express= require('express')
const app=express();
const tasks=require("./router/routes")
const connectDB=require('./DB/connect')
const port=4040;
require('dotenv').config()
// app.use(express.static('./public'))
app.use(express.json());


app.get('/hello',(req,res)=>{
    res.send("working fine")
})
app.use('/api/v1/tasks',tasks);

const start= async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is running on ${port}....`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()

