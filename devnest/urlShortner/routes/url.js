const express = require('express');
const router = express.Router();
const Url = require('../models/useModel')
const createDB = require('../config/db');

const baseUrl = 'http://localhost:1337/urlapi'

//connecting databse
createDB.sync().then(() => console.log('now you can store the data'));




//post request 
router.post("/", async (req, res) => {
  try {
    const { longUrl } = req.body;
    const shortId = Math.random();
    //inserting values 
    const shortUrl = await Url.create({
      longUrl,
      shortUrl : shortId,
    });
    //sending response if its success
    return res.status(200).json({
      status: "ok",
      shortUrl: `${baseUrl}/${shortId}`,
    });
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
});

router.get('/:short',async (req,res)=>{
  let shortId=req.params.short;
  try {
    let url=await Url.findOne({
      where:{
        shortUrl: shortId
      }
    });
    if(!url){
      return res.status(404).send("Invalid short url")
    }
    return res.redirect(url.longUrl)
  } catch (error) {
    return res.status(500).send(e);
  }
})
module.exports = router;