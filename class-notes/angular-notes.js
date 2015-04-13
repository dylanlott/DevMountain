//app.js - initiate our angular app in the app.js

var app =  angular.module('todo', []); //tells angular which module to look at 
//the empty array passed in makes a new module for angular. 

app.controller('mainCtrl', function($scope){
	//configuration and stuff go in app.js file 
	//$scope is just an object that we can add properties to 
	$scope.name = "Tyler"; 
})


$scope.addItem = function() {
	$scope.todoList.push($scope.newItem); //$scope.newItem is the input field value. $scope.todoList is the model 
}

