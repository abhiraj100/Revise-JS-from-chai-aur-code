// Primitive Datatype (7 categories/ types)
// primitive datatypes , they are call by value
// which means whenever you are call them. If you copy it from somewhere then the
// reference of its original data is not given to you in the memory after copying it 
// it id given to you separately and whatever change you make in it gets changed
// in the copy.


// 7 types :  String, Number, Boolean, null , undefined, Symbol, BigInt
// null(not zero , it means empty (ex - temp)), 
// undefined -- in it variable is declared as memory space is declared but it is not known whether the value will come in it, hence it is called undefined.
// symbol -- symbol is to make any value unique... Symbol is used to create it

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null   // completely empty

let userEmail;  // undefined
let userEmail1 = undefined;


const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);  // false

// BigInt
const bigNumber = 3435535646457674356n  // 2 to the power 53


// Non-primitive Datatype or Reference Datatype
// all these values are such that their reference can be directly allocated to you in the memory

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj" , "doga"];

// Objects {} (in key values pair)
let myObj = {
    name: "Abhiraj",
    age: 22,
}


// Functions  -- defination of the function => function(){}

 const myFunction = function(){
    console.log("Hello World");
 }


console.log(typeof bigNumber); // undefined

// if the variable is not declared 
console.log(typeof bigNum);

console.log(typeof scoreValue);  // number

console.log(typeof outsideTemp);  // object

console.log(typeof myFunction);  // return function -- but it is called as object function

// Non-primitive datatypes are all Object type

console.log(typeof heros);  // object

console.log(typeof anotherID);
console.log(typeof Id);
console.log(typeof id);
























// JavaScript is a dynamically type or statically type 