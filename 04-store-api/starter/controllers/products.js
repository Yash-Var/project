
const getALLProduct=async(req,res)=>{
   
    res.status(200).json({msg:"product is testing"})
}
const getProduct=async(req,res)=>{
    res.status(200).json({msg:"testing"})
}

module.exports={
    getALLProduct,
    getProduct
};