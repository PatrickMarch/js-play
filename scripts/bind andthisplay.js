let talk = function () 
{console.log(this.sound);}
let boromir = { speak:talk,
    sound:"One does simple not walk into mordor" };
let talkBoundToBoromir = this.talk;

//talkBoundToBoromir();
//talk();
    boromir.speak();