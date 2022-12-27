const {Sequelize}=require('sequelize');

const createDB=new Sequelize("test-db",'name',"pass",{
    dialect:'sqlite',
    host:"./config/db.sqlite"
})
module.exports=createDB