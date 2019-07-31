
function loadDoc() {
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
    xhttp.open("GET", "http://localhost:8080/api/show", true);
    
    xhttp.send();
  };

  





//   function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
     
//        //document.getElementById("demo").innerHTML = this.responseText;
//        //console.log(this.responseText);
//        //var google = JSON.stringify(this.responseText);
//        console.log(this.responseText);
//       }
// ​
//       else if (this.readyState == 4 && this.status == 404){
//         console.log('sorry, opage not found');
//       } 
// ​
// ​
// ​
//     };
//     //xhttp.open("GET", "lisa.txt", true);
//     xhttp.open("GET", "https://raw.githubusercontent.com/Ruffinsan0/MyFirstApp/master/README.md", true);
    
//     xhttp.send();
//   };