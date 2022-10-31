const express=require('express')

const router=express.Router()

const { getALLProduct,
    getProduct}=require("../controllers/products")

router.route('/').get(getProduct)
router.route('/static').get(getALLProduct)

module.exports=router