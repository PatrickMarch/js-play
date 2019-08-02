/* this is going to be me making a cool script that redirects to whatever the person puts in the form bar mainly to google with the redirect info */
'use strict';
function redirect() {  
    var response = document.getElementById ('answer');
    window.location.href ="http://www.google.com.pk/search?btnG=1&pws=0&q=" + response;} //this is the redirect function
  
  function validateForm() {
var x = document.forms["myForm"]["fname"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
}

  function reverseString (str)
  { 
    return str.split("").reverse().join().replace(/,/g,'');
    // /g means global match and finds all matchs past the first
  }
  /*
  function reverseString(str) {
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
newString += str[i];
}

return newString;
}
*/
  console.log(reverseString("potaotoe"));
  console.log(reverseString("games"));
  console.log(typeof (reverseString("lindows")));
  var answer = document.getElementById("reverseStringAnswer")
  answer.append (reverseString("lindows"));

  var imgElement = document.createElement ("img");
  imgElement.src = img.src;
  document.body.appendChild(imgElement);