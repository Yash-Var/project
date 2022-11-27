var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var flash = require('connect-flash');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
dotenv.config();// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
{
 domain: process.env.AUTH0_DOMAIN,
 clientID: process.env.AUTH0_CLIENT_ID,
 clientSecret: process.env.AUTH0_CLIENT_SECRET,
 callbackURL:process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
},
function (accessToken, refreshToken, extraParams, profile, done) {
 return done(null, profile);
});passport.use(strategy);// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
 done(null, user);
});passport.deserializeUser(function (user, done) {
 done(null, user);
});const app = express();
app.get('/test', (req, res, next) => {
 res.send({ message: "Server is on" });
})// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(cookieParser());// config express-session
var sess = {
 secret: 'CHANGE THIS SECRET',
 cookie: {},
 resave: false,
 saveUninitialized: true
};app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());app.use('/', authRouter);
app.use('/', indexRouter);app.use(function (err, req, res, next) {
 res.status(err.status || 500);
 res.send({message: err.message,error: err});
});app.listen(8080, () => {
 console.log("Server is runnig on port 8080");
});module.exports = app;