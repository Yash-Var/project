require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const UserData = require("./models/userData");

const router =require('./router/index')
app.use(express.json());
app.use(router)
app.get("/", (req, res) => {
  res.send("Hello world from the server");
});

app.get("/about", (res, req) => {
  res.send("about page");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
});

app.get("/signin", (req, res) => {
  res.send("signin page");
});

app.get("signUp", (req, res) => {
  res.send("signUp page");
});
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
