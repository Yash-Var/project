const express=require('express')

const app=express();

require('dotenv').config()

// index.js

const { auth } = require('express-openid-connect');
app.use(
  auth({
    authRequired:false,
    auth0Logout:true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL:process.env.BASE_URL ,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
app.get('/',(req,res)=>{
res.send(req.oidc.isAuthenticated()?"Logged In":"Logged Out")
})

const port =process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`running on ${port}`);
})