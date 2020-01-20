"use strict";

/* let newObject = {};
let newObject1 = Object.create(Object.prototype);
newObject1.linux = true; 
let newObject2 = new Object();
let newObject3 = [];
Object.defineProper
newObject.someKey = 'lindow';
newObject3.truth =true;
console.log(newObject);
console.log(newObject1);
console.log(newObject2);
console.log(newObject3)
let human = Object.create(newObject3)
console.log(human); */
let myModule = {
    myProperty: "somevalue",
    myConfig: {
        useCaching: true,
        language:"en",
        value:"linux",
        ramUsage:true
    },
    saySomething: function() {
        console.log("where is linux... also paul irish LOL");
    },
    reportMyConfig: function() {
        console.log("caching is " + (this.myConfig.useCaching? "enabled":"disabled"));
    },
        updateMyConfig: function(newConfig)
    {   if(typeof newConfig === "object")
        {   this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
}
myModule.saySomething();
myModule.reportMyConfig();
myModule.updateMyConfig({
    language:"linux",
    useCahching:false
});
myModule.myProperty = "lindows"
myModule.reportMyConfig();