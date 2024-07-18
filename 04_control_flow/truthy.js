const userEmail = "a@abhiraj.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

console.log("----x----x----x----");

const userEmail1 = ""
if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

console.log("----x----x----x----");


// falsy values

// false, 0, -0, BigInt 0n, "" (empty array), null, undefined, NaN

// truthy values

// true, "0", 'false' , " "(one space inside) , [] , {} , function(){} (empty function), 


// do it on console inspect
// false == 0  => true
// false == '' => true
// 0 == ''     => true

const userEmail2 = []
if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

console.log("----x----x----x----");

// const userEmail2 = []
if (userEmail2.length === 0) {
    console.log("Array is empty");
} 

console.log("----x----x----x----");

const emptyObj = {}

// Object.keys(emptyObj) -> it returns array

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


console.log("----x----x----x----");

// Nullish Coalescing Operator (??) : null & undefined (it depends on these two operators)

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20  // 10  first value is assigned

console.log(val1);

console.log("----x----x----x----");

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const coldCoffee = 120
coldCoffee >= 80 ? console.log("more than 80") : console.log("less than 80")



