const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("helllo world");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send({mes:req.body})
});
module.exports = router;
