//One to one relationship 
var mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
	name: String, 
	age: Number,
	address: {
		line_one: String, 
		line_two: String, 
		city: String, 
		state: String, 
		zipcode: Number
	}
	cart: [{
		name: String, 
		price: Number, 
		description: String
	}]
}); 

var user = mongoose.model('User', userSchema); 

var productModel = new mongooseSchema({
	
});

