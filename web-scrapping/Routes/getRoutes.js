const express = require("express");

const router = express.Router();

router.post("/indeed", async (req, res) => {
  try {
    const { skill } = req.body;

    let scrp = await main(skill);
    return res.status(200).json({
      status: "ok",
      list: scrp?.list || {},
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
