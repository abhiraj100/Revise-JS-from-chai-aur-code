let score = 33

console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

let score2 = "33abc"
let valueInNumber1 = Number(score2)
console.log(valueInNumber1)   // NaN  Not a number

let rank = null

console.log(typeof rank);
console.log(typeof(rank));

let valueInTheNumber = Number(rank)
console.log(typeof valueInTheNumber);
console.log(valueInTheNumber)


let rank1 = undefined

console.log(typeof rank1);
console.log(typeof(rank1));

let valueInTheNumber1 = Number(rank1)
console.log(typeof valueInTheNumber1);
console.log(valueInTheNumber1)

let rank2 = true

console.log(typeof rank2);
console.log(typeof(rank2));

let valueInTheNumber2 = Number(rank2)
console.log(typeof valueInTheNumber2);
console.log(valueInTheNumber2)


let nameStr = "abhiraj"

console.log(typeof nameStr);
console.log(typeof(nameStr));

let valueInTheNumber3 = Number(nameStr)
console.log(typeof valueInTheNumber3);
console.log(valueInTheNumber3)

// Notes 
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

console.log("------------------")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

console.log("------------------")

let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);  // false

console.log("------------------")

let isLoggedIn2 = "abhiraj"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);  // true

// In Boolean 1 convert into => true; 0 convert into => false;
// "" => false
// "abhiraj" => true


console.log("------------------")

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  // 33
console.log(typeof stringNumber);
