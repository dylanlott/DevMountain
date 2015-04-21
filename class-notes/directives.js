//Directive Notes -- Angular JS
//they teach angular new tricks.

//make a fucking directive together

//ProTip - name your directives two words in Camel Case

var app = angular.module('nodeExample'); 

app.directive('dirExample', function(){
	//start of our directive, you want it to return your directive object 
	return {
		restrict: 'EA', //element and attribute calls in the html 
		scope: {
			one: '@', 
			two: '=', 
			three: '&' //I have no fucking clue what these are doing 
			user: '=' //two way binding
		},
		templateUrl: "dirExample.html",
		link: function(scope, elem, attr){
			console.log(scope, elem, attr){ //this is not injection
				console.log(scope);
				console.log(element); //dir-example
				console.log(attrs); //
		},
		controller: function($scope){ //injection of $scope
			console.log($scope); 

		},
		transclude: true,
	}
})

