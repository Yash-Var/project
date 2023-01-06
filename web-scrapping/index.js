const express=require('express')

const app=express()
const getRoutes=require('./Routes/getRoutes')

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use('/api/v1/',getRoutes);

const PORT=3001;

app.listen(PORT,()=>{
    console.log("server is running")
})