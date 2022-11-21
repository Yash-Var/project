require('dotenv').config()
const exprees = require("express");
const app = exprees();
const connectDB = require("./db/connect");
const UserData=require('./models/userData')
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
