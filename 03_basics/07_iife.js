// Immediately Invoked Function Expressions (IIFE)

// The function immediately execute and help us to avoid from the global scope pollution

// Two reasons
// 1. We don't want pollution from the global scope at all. So we create a separate scope because in the function it is made
// 2. and we want to immediately execute 

function chai() {
    // named IIFE -> because here name is defined
    console.log(`DB CONNECTED`);
}
chai();

console.log("----x----x----");

// named iife
(function chai1() {
    console.log(`DATABASE CONNECTED`);
})();

console.log("----x----x----");

// syntax :- ()() -- first parentheses is for declaration and the second is for execution call

// unnamed iife
( () => {
    // Simple IIFE -> because no name is defined here
    console.log(`DB CONNECTED TWO`);
}) ();

// to stop the iife we have to put ; in the last to end the execution
console.log("----x----x----");

( function aurCode() {
    console.log(`DB CONNECTED THREE`);
}) ();


console.log("----x----x----");

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
}) ("YADUVANSHI");