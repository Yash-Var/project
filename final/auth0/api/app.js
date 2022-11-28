const express = require("express");
const app = express();
const team= require('./models/team')
const axios = require("axios");
const { expressjwt: expressJwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const cors = require("cors");
const connectDB=require('./db/connect')

const mongoose=require('mongoose')
require("dotenv").config();

app.use(cors());

const jwtCheck = expressJwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUSER,
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

app.get("/", (req, res) => {
  res.send("hello from index route");
});

app.use(jwtCheck);

app.get("/protected", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-g0q71ge4kbv6v5xo.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userinfo = response.data;
    console.log(userinfo);
    res.send(userinfo);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/api/v1", async(req, res) => {
  const task = await team.create(req.body);
  res.status(201).json({ task });
  
});


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server error";
  res.status(status).send(message);
});

const port=process.env.PORT || 4000;
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
