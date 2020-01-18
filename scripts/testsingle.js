'use strict';
/*
let dog = {
    sound:'woof',talk:function()
    {console.log(this.sound);}
};
dog.talk; //doesn't seem to work for some reason
let talkFunction = dog.talk;
talkFunction();//undefinded do to not being bound to the dog object
let talkFunction = dog.talk.bind(dog);//test code no idea if it will work

function talk()
{console.log(this.sound);}
talk();
*/
     const single = mySingleton.getInstance();
     console.log(single.getRandomNumber());
var myInstance = { 	
    method1:function(text) {console.log(text)},
    method2:function(number){console.log(number)}
};
myInstance.method1("linux");
