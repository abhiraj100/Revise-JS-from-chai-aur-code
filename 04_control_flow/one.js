// if
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("logged in");
}

if (2 == "2") {
    console.log("executed");
}

// <, >, <=, >=, ==, !=, === (it also checks the type) , !==
// = assignment
// == check equal to
// === strict equal

// type checking

if (2 === "2") {
    console.log("executed");
}
console.log("triple equal to checks the data as well as type that's why executed is not print in this case.")

console.log("-----x------x-----x------");

const temperature = 41;

if (temperature < 50) {
    console.log("less than 50");
}

console.log("temperature is greater than 50");

console.log("-----x------x-----x------");

// const temperature = 41;

if (temperature === 41) {
    console.log("less than 50");
}

console.log("temperature is greater than 50");

console.log("-----x------x-----x------");

// const temperature = 41;
console.log(" if-else condition")

if (temperature === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("100% it will execute")

console.log("-----x------x-----x------");

// const temperature = 41;
console.log(" if-else condition")

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("100% it will execute")

console.log("-----x------x-----x------");

// scope related
const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`);
}

// the below line gives error because power variable is not defined outside the if condition
// it is a functional scope
// console.log(`User power : ${power}`);   // error :- power is not defined

console.log("-----x------x-----x------");

// scope of the var is completely global it is accessed from outside the scope

if (score > 100) {
    var power = "fly"
    console.log(`User power : ${power}`);
}

console.log(`User power : ${power}`);


console.log("-----x------x-----x------");

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// it throws error : power is not defined

console.log("-----x------x-----x------");

// short-hand notation

const balance = 1000

// implicit scope 

if (balance > 500) console.log("test");

console.log("-----x------x-----x------");

// we can write multiple lines by using comma (,) and write the statement

if (balance > 500) console.log("test"),
console.log("Abhiraj"),
console.log("Yadav");

console.log("-----x------x-----x------");

if (balance < 500 ) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

console.log("-----x------x-----x------");

const userLoggedIn = true
const debitCard = true

if (userLoggedIn  && debitCard) {
    console.log("Allow to buy course");
}

console.log("-----x------x-----x------");

if (userLoggedIn  && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}

console.log("-----x------x-----x------");

if (userLoggedIn  && debitCard && 2 == 3) {
    console.log("Allow to buy course");
} else {
    console.log("Not allow to buy course")
}

console.log("-----x------x-----x------");

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

