const express = require("express");
const app = express();
const { expressjwt: expressJwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const cors = require("cors");

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

app.get("/protected", (req, res) => {
  res.send("hello from protected route");
});

app.listen(4000, () => {
  console.log("Server us running on 4000");
});
