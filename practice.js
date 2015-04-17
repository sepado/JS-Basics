//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
//Code Here

//var function expression uses var first  === var (you have to call the function after in the code) 
//fucntion declaration is below === this gets hoisted

function isTyler(name) {
	if(name === Tyler) {
		return true;
	} else {
		return false;
	}
}

//Next problem
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
//Code Here

function getName() {
	var name = prompt("What is your name?");
	return name;
}

//Next Problem
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
//Code Here

function welcome() {
	alert("Welcome " + getName());
}

//Next problem
//What is the difference between arguments and parameters?
//Answer Here
//ANSWER: parameters are a part of the function's definition
//ANSWER: arguements are passed to the function when it is called, uses the parameters


//Next problem
//What are all the falsy values in JavaScript and how do you check if something is falsy?
//Answer Here
//ANSWER: anything that is not falsy is true
//ANSWER: values that translate to false in an IF statement
		// if(false)
		// if (null)
		// if (undefined)
		// if (0)
		// if (NaN) //Not A Number
		// if ('') 
		// if (document.all) [1]


//Next Problem
//Create a function called myName that returns your name
//Code Here

function myName() {
	return "Sean";
}


//Now save the function definition of myName into a new variable called newMyName
//Code Here

var newMyName = myName();
//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem
//Create a function called outerFn which returns an anonymous function which returns your name.
//Code Here
function outerFn() {
	function (){
		return "Sean";
	}
}


//Now save the result of invoking outerFn into a variable called innerFn.
//Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();



