//twilio server 

var express = require('express'); 
var request = require('request'); 
var bodyParser = require('body-parser'); 

process.env.TWILIO_ID 

var twilio = {
	id: 
	token: 
}

var phones = {
	to: '+14355539460',
	from: '+14355389142'
}

var app = express(); 

app.post('/sms', function(req, res) {
	//send a tex to the To number 
	var url = fmtUrl; 
	request.post(url, {
		to: phones.to,
		from: phones.from, 
		body: "this is a bunch of bullshit" 
	}, function(err, res, body) {
		console.log("body", body); 

		if(!error && response.statusCode === 200) {
			console.log(body); 
		} else {
			console.log("Error"); 
		}
	})
})