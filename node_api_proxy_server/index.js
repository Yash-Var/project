const express=require('express')
const app=express();

const cors =require('cors')

const PORT=process.env.PORT || 4000;

app.use(cors)
app.get('/',(req,res)=>{
    res.send("yash varshney")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})