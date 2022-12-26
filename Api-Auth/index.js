 const express=require('express');

const app=express();
const routes=require('./routes/authRoutes')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

const port=1337;

app.use('/api/v1',routes);

app.listen(port,()=>{
  console.log("App is running at port :",port);
})