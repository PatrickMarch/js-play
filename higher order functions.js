		document.getElementById("reverseStringAnswer").innerhtml = "potat";
		const a = { b:6 ,c:2}; a.b=7 //a.b is immutable but the number in it is mutable which means it can be changed
		//so a.b will always be there from now on in the global scope but the number in it can be whaterver it i want it to be after is has been declared even a string
		
		a.b = {a:6};
		console.log(typeof(a));
		// this is a arrow function it can only have 1 argument which on this one is x  then the => tells the compiler this is a arrow function and this is the code in the curly brackets{} and whatever is in there auto returns what the code does
		var triple = x =>  x*3;
		console.log(triple (3));
		var nonExistentFunction = () => console.log("exists");
		nonExistentFunction();
		var argTest = () console.log(arguments.length);
		argTest("potatoe","lindows");
		const object = [
			{a:"potat"},{a:"apple"},{a:"potat"}
						];
		var ispotat =function(potat)
		{return object.a ==="potat"}
		const number = object.map (ispotat);
		console.log(number);
		console.log(typeof(number) + object);
		var arrow = (y) => y +1;
		console.log(arrow(2));
		document.title ="lindows";
                