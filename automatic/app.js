require('dotenv').config()
const express=require('express')

const app= express();
const connectDB=require('./db/connect')
const auto= require('./models/auto')
const router=require("./routes/routes")
const sendEmail=require('./sendEmail/sendMail')
app.use(express.json())
app.use('/api/v1/auto',router)
app.use('/api',sendEmail);


app.get('/api',async(req,res)=>{
console.log("akshat");
})

const port=process.env.PORT || 8080;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () => {
        console.log(`server is listenning on ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start()