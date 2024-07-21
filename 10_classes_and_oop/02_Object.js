// Prototypal behaviour

// inheritance , this, new , classes comes from prototypal
// in javascript everything is an object. So, we say that function is an       function as well as object.
// function is also reference to the object

function multiplyBy5(num) {
    this.num = num; 
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));  // 25
console.log(multiplyBy5.power);  // 2
console.log(multiplyBy5.prototype);  // {} by default context set

// this -> set current context
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// our own function declare 
createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);
// it gives error :- Cannot read properties of undefined (reading 'printMe')

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();  // price is 25 
tea.printMe();  // price is 250

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return 
value is specified from the constructor, JavaScript assumes this, the newly created
object, to be the intended return value.

The new object is returned: After the constructor function has been called, if 
it doesn't return a non-primitive value (object, array, function, etc.), the newly 
created object is returned.

*/


