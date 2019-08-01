console.log("hey how are you");
window.onload = function(){

var button = document.querySelector("button");
var input = document.querySelector("input");
// var choices = document.querySelector(".choices")


var menu = {"Fries": 10, 
			 "Shakes": 20,
			 "BaconBite": 50, 
			 "Chicken": 45, 
			 "Fruit Bowl": 9, 
			 "Chips": 29, 
			 "Hot Dogs": 104, 
			 "Salad": 56, 
			 "Pizza": 29, 
			 "Coke": 18}



button.addEventListener("click", function(){

var customerOrder = input.value;
var itemPair = customerOrder.split(", ");

for(var i = 0; i < itemPair.length; i++){
	var items = itemPair[i].split(": ");
var menuItems = Object.keys(menu)
var menuQuan = Object.values(menu)
for(counter=0; counter < menuItems.length; counter++){
	// if(menuItems[counter] =! items[0]){
	// 	console.log("Sorry we don't carry that item!")
	// }
	if (menuItems[counter] == items[0]) {
	var remainder = menuQuan[counter] - items[1];
	console.log(remainder);
	if (remainder <= 0){
		console.log("sorry we are out")
	}
	}
	function changeUri() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		   //document.getElementById("demo").innerHTML = this.responseText;
		   //console.log(this.responseText);
		   //var google = JSON.stringify(this.responseText);
			 var resp = this.responseText;
	
			 console.log(JSON.parse(resp));
		  }
		};
		//xhttp.open("GET", "lisa.txt", true);
		// xhttp.open("GET", "http://localhost:8080/api/show", true);
		var item_name = encodeURIComponent(items[0]);
		var item_count = encodeURIComponent(items[1]);
		var request = "/api/add?mitem=" + item_name + "&count=" + item_count;
			xhttp.open("GET", request, true);
		//   xhttp.open("GET", "http://localhost:8080/api/show", true);
		  // xhttp.open("GET", "http://localhost:8080/api/add?itemName&itemCount", true);
		  xhttp.send();
	
		// xhttp.send();
	  };
	  changeUri();
  }
}


});


// choices.addEventListener("click", function(){


// });


};



	// console.log();

// if (items[0] === menuItems){
// console.log("yeah");
// console.log(items[0]);
// console.log(menuItems);
// console.log(items[0] === menuItems);
// for (var fastFood in menu){
// 	console.log(fastFood);
// 	console.log(menu[fastFood]);
	
// }