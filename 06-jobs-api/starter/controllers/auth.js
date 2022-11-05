const login=async(req,res)=>{
res.send("login done")
}

const register=async(req,res)=>{
res.send("resister done")
}

module.exports={
    login,
    register
}