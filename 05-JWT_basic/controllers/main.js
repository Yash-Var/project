const CustomAPIError=require('../errors/custom-error')

const login=async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password',400)
    }
    res.send('Fake Login/Register/Signup Route')
}

const dashboard=async (req,res)=>{
    const luckyNumber =Math.floor(Math.random()*100)
    res.status(200).json({msg:`yash varshney ${luckyNumber}`,secret:`here is your data`})
}
module.exports={
    login,
    dashboard
}