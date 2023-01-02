require('dotenv').config();

const nodemailer=require('nodemailer');

const SMTP_PORT=587;

const HOST_SERVICE='smtp-relay.sendinblue.com';

const SENDER_EMAIL=process.env.USER_EMAIL;

const RECEIVER_EMAIL="yashvarshney7011@gmail.com";

const CC=[]

const BCC=[]

const EMAIL_SUBJECT="Happy Birthday";

const EMAIL_BODY_HTML="<h1>HAPPY BIRTHDAY </h1>";


