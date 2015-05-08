var mongojs = require('mongojs'); 

var db = mongojs('test'); //assumes on localhost and connects to db test 

var users = db.collection('users'); 

//find user 
users.find(function(err, docs){
	console.log(err, docs); 
});


//add user 
users.insert({name: 'Jim', age: 40, status: 'active'}, function(err, new_user) {
	console.log(err, new_user); 
}); 

//users over the age of 19
users.find({age:$gt19}}, function(err, users) {
	console.log(users); 
});

