//ANGULAR ROUTING NOTES 
var app = angular.module('routesApp', ['ngRoute']);

//route object
// when is a method 
//  the first parameter of the When method is the name of ther oute
//  the second parameter of the When method is the URL 

app.config(function($routeProvider, $locationProvider, $routeParams) {
	$routeProvider
	.when('/', { 
		templateUrl: '/templates/home/home.html',
		controller: 'homeCtrl' //for controllers, we don't reference the place, only the name of the controller in quotes. 
	});
	.when('/birds/:something', {
		templateUrl: 
		controller: 
		resolve: {
			//if you want to resolve data before this route loads, do that here 
		}

	})
});
