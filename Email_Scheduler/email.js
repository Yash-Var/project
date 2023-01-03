require('dotenv').config();

const nodemailer=require('nodemailer');

const SMTP_PORT = 587;

const HOST_SERVICE='smtp.gmail.com';

const SENDER_EMAIL=process.env.USER_EMAIL;

const RECEIVER_EMAIL="yashvarshney7011@gmail.com";

const CC=[]

const BCC=[]

const EMAIL_SUBJECT="Happy Birthday";

const EMAIL_BODY_HTML="<h1>HAPPY BIRTHDAY </h1>";

const options={
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bb: BCC,
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML
}

const transporter= nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SENDER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
})

module.exports={transporter,options};