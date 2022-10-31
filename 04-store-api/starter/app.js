require("dotenv").config()
require('express-async-errors')
const express = require("express");

const app = express();
const connectDB=require('./db/connect')

const notFoudMIddleware = require("./middleware/not-found");
const errorHander = require("./middleware/error-handler");

const product=require('./routes/products')
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>started</h1><a href="/api/v1/products">Products</a>');
});
app.use('/api/v1/products',product)
app.use(notFoudMIddleware);
app.use(errorHander);

const port = process.env.POORT || 5050;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listenning on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start()