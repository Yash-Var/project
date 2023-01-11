require("dotenv").config();
const express = require("express");
const app = express();
const Data = require("./models/data");
const logger = require("./sendMail");
const connectDB = require("./db/connect");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.post("/", async (req, res) => {
  const newdata = await Data.create(req.body);
  res.status(201).json({ newdata });
});
const getAllMember = async (req, res) => {
  try {
    const member = await Data.find({});
    // console.log(member);
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
app.get("/", getAllMember);

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listenning on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
