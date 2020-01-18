//mdn map learning
let myMap = new Map();
var keys = 'a string', keyObj = {}, keyFunc= function() {console.log('works');};
myMap.set(NaN);
myMap.get(NaN);
var  otherNaN = Number('foo');
console.log(myMap.get(otherNaN));
myMap.set(keyFunc);
myMap.get(keyFunc);
console.log(myMap);