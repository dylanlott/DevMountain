//Object Examples 

var carWash = {
    moneyMade = 234234234; 
    totalWashes = 2342; 
    open: true; 
    slots: {
        red: {occupied: true, status:'working'},
        blue: {occupied: false, status:'working'},
        green: {occupied: false, status: 'broken'}
    }
}


var drink = {
    calories = 0; 
    totalCarbs = 2; 
    protein = 0; 
    vitaminB6 = "100%"; 
    ingredients: ['Carbonated Water', 'Citric Acid', 'Sorbic Acid']
	servingsPerContainer: 2; 
	servingSize: "8.0 Fl. Oz."; 
	name: "Zero Ultra";
}

var listIngredients = function(item){
	for(i=0; i<item.ingredients.length; i++){
		alert(monster.ingredients[i]); 
	}
}

//delete method for removing keys/props from Objects 
delete monster.Calories; //deletes a property out of an object 
delete monster["2"] //delete a key from an object using bracket notation

monster['protein'] //gives you the value of key 'protein' 

var myVariable = 'protein'; 

monster[myVariable]; //same as monster['protein']

var carbs = 'totalCarbs'; 
monster[carbs]; 


for(var key in monster){ // loops over every key in monster object
	alert(monster[key]); //alerts every value in the monster Object 
} 

//use bracket notation when you're using a placeholder to look somethig up 
//if you know the exact property you're trying to get, use dot notation 


//object methods 
monster.drink = function(){
	alert("I am drinking a ton of these"); 
}
monster.drink(); 

friends.push("NameofFriend"); 

//arrays are just objects with some convenience / extra features add to them 

//Looping