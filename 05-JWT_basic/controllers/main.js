require('dotenv')
const jwt=require('jsonwebtoken')
const CustomAPIError=require('../errors/custom-error')


const login=async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password',400)
    }
    
    
    const id=new Date().getDate()
// console.log(id,username);
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:"user created",token})
}

const dashboard=async (req,res)=>{

    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided',401)
    }

    const token 

    const luckyNumber =Math.floor(Math.random()*100)
    res.status(200).json({msg:`yash varshney ${luckyNumber}`,secret:`here is your data`})
}
module.exports={
    login,
    dashboard
}