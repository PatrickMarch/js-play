/* this is going to be me making a cool script that redirects to whatever the
 person puts in the form bar mainly to google with the redirect info */
'use strict';
var answer = document.getElementById("reverseStringAnswer")
// function works
function redirect() {  
  event.preventDefault();
    var response = document.getElementById ('answer');
    window.location ="http://www.google.com.pk/search?btnG=1&pws=0&q=" + response.value;} 

// this function works 
  function reverseString ()
  { let reverseDiv = document.getElementById('reverseString');
    let reverse = document.getElementById('reverse');
    event.preventDefault();
    let reversed = reverse.value.split("").reverse().join().replace(/,/g,'');
    reverseDiv.textContent = reversed;
    //reverseDiv.insertAdjacentElement ('afterend',reverse.value.split("").reverse().join().replace(/,/g,''));
    // g means global match and finds all matchs past the first
  }
  //NEWEST REVISION OF THE CONVERSION
  //reverseDiv.insertAdjacentElement ('afterend',reverse.value.split("").reverse().join().replace(/,/g,''));
  
  //older version
  //reverseDiv.insertAdjacentHTML('afterend','<p id=\"reverseString\">' + reverse.value +'</p>');
  //works insertAdjacentHTML has the browser parce the html then put it in the DOM
 //let test =  document.getElementById('reverseString');
 //test.insertAdjacentHTML('afterend','<div id=\'reverseString\'>linux</div>'); 
//test.insertAdjacentHTML('afterend','<div id=\'reverseString\'>linux</div>'); 
//let test2 = "linuxTown";
//test.insertAdjacentHTML('afterend',test2.split("").reverse().join().replace(/,/g,''));
  // reversetext
/*   console.log(reverseString("potaotoe"));
  console.log(reverseString("games"));
  console.log(typeof (reverseString("lindows")));
  
  answer.append (reverseString("lindows")); */

/*   var imgElement = document.createElement ("img");
  imgElement.src = img.src;
  document.body.appendChild(imgElement); 
  
  // reverse string semi working

     let revesedString =  x.split("").reverse().join().replace(/,/g,'');
    answer.append (reverseString(revesedString)); 

  */