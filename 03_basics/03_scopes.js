/*
let a = 10
const b = 20
var c = 30

{}  // curly braces is a scope in almost every programming language.


console.log(a);
console.log(b);
console.log(c);
*/

// var c = 300  // Global Scope

if (true) {
    let a = 10     // Block Scope
    const b = 20
    var c = 30
    // c = 30

    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);
// console.log(b);
console.log(c);   // Problem because it is printed

console.log("----x----x----")

let d = 400

if (true) {
    let d = 40
    const e = 50
    console.log("INNER(d): ", d);
    // function addNum() {

    // }
}

console.log(d);
// console.log(e);


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }