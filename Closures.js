function add() {
    var counter = 0;//free variable
    function plus() { counter += 1; }
    plus();
    return counter;
}
const plusCall = add();

console.log(plusCall);

//This could have solved the counter dilemma, if we could reach the plus() function from the outside.
//We also need to find a way to execute counter = 0 only once.
//We need a closure.
//Global counter made local and can be access only with function add ! and counter initialize once! 
//This is called a JavaScript closure.It makes it possible for a function to have "private" variables.
//The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
//A closure is a function having access to the parent scope, even after the parent function has closed.
//example 2 

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
