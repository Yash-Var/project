require('dotenv').config()
const express = require("express");
const  errorHandler  = require('./middleware/errorHandler');
const app = express();
const port=process.env.PORT;
const connectDB=require('./db/connect')

const router=require('./router/routes')
app.use(express.json())
app.use('/api',router);

app.use(errorHandler);

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
