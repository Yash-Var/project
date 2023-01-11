require('dotenv').config()
const nodemailer = require("nodemailer");

const logger = async (req, res, next) => {
    console.log(req.body);
  
    const email = req.body.email;
   
  
    try {
      const mail = async () => {
       
        const config = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user:process.env.email,
            pass: process.env.Password,
          },
        });
        await config.sendMail({
          form: "test@gmail.com",
          to: req.body.email,
          subject: "Thanks for Enquiring the Kiet Koders Korner",
          text: `Yash`,
          html: `${req.body.message}`,
        });
      };
  
      mail().catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
  
    console.log("yash varshney");
    next();
  };
  
  module.exports = logger;
  