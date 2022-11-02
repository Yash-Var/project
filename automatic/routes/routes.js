const express=require('express')

const router=express.Router()

const { getAllMember,
    getSingleMenber,
    createAuto,
    deleteAuto,
updateAuto}=require("../controller/auto")

router.route('/:e').get(getSingleMenber).delete(deleteAuto).patch(updateAuto)
router.route('/').get(getAllMember).post(createAuto)

module.exports=router