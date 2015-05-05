var express = require('express'); 
var bodyParser = require('body-parser'); 
var session = require('express-session'); 
var passport = require('passport'); 
var TwitterStrategy = require('passport-twitter').Strategy; //accessing a property of this library and requiring the library

passport.use(new TwitterStrategy( {
	// store consumer key and consumer secret in an environment variable i.e. process.env.TWITTER_CONSUMER_KEY
	consumerKey: '', //get this from twitter app from 
	consumerSecret: '', //also from twitter app form 
	callbackUrl: '' //where you doing the call 
}, function(token, tokenSecret, profile, done) {
	console.log("token", token); 
	console.log("profile", profile); 
	done(null, profile); 
})); 

app.use(bodyParser()); 
app.use(session({secret: 'todayisanicedayforawalk';})); 

//passport middleware
app.use(passport.intialize()); 
app.use(passport.session()); 

passport.serializeUser(function(user, done) {
	done(null, user); 
}); 

passport.deserializeUser(function(obj, done) {
	done(null, obj); 
}); 

app.use(express.static(__dirname+'/public')); 
app.listen(9000); 

