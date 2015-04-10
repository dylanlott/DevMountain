//JQuery Notes 
/* 

jQuery has great documentation 

JavaScript and HTML are parsed Top to Bottom

Ready Function 
jQuery uses the $ as the function button. 

$(document.getElementById("username"))
Better ways to interact with the browser 

$(document).ready(function(){ //this anonymous function is a closure 
	console.log("The document is ready now"); 	
})


###############################
###Select Elements On Your Page 
var element = $("#username") 

jQuery returns an object

select by element name 

var element = $("h1"); //select all H1 elements in the page 

var element = $(.welcome); 
element.css({color: blue})


###############################
##### DOM Structure Changes 
$("#container").prepend ("<h3>This is a warning message</h3>");
//this adds an element to the id "container" 
append - bottom 
prepend - top 




###############################
#####Click Events in JQuery 

$("#button").on('Click'), function(){
	
} 

jQuery Events List 

Event Bubbling / Event Delegation
Every node in the DOM has exacly 1 parent. 

"Did this node have an even handler connected to it?" -- event delegation 

pseudo class :visible --used to hide elements or show elements 

var username = $("#username").val();
var password = $("$password").val(); 

AJAX - how you send HTTP requests back to the server 

//Common Design Pattern 
$.ajax({
	type: "post", 
	data: {
		username: 
		password: 
	}
})

var x = $("#input").val(); 

$("#language").val('es');



###############################
###### Getting the elements of a container 

.text() 
This pushes out a string and ignores HTML elements 
&lt; -- this renders as a literal < sign, not as an HTML element 
.text() does this in jQuery 
Ampersand encoded entities 

Security Concerns --




############################### 
##### Find Function 

$("#container div").remove(); //deletes all divs in element #container 

slideDown() 

toggleClass()

jQuery UI - check that shit out 



############################### 
Chaining functions together is possible in JQuery 
Better for performance 



###############################
Angular - MVC Framework 

Projects

Mini Paint

atr() set the attribute of an item (ID, class, etc...)

fadeIn() fadeOut() 
