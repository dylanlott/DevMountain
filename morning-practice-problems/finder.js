var nums = ["hello", "javascript", "awesome"]

var finder = function(str, arr){
	for(i=0; i<arr.length; i++){
		if(str === arr[i]){
			return true; 
		}else{
			return false; 
		}
	}
}


