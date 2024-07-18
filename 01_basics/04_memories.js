// Stack Memory (Primitive), Heap Memory (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"  // it is a Primitive Type

let anotherName = myYoutubeName
console.log(anotherName);

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne   // same reference will be given if you change the value of userTwo then definitely it will reflect in the userOne because Non-Primitive datatype uses the concept of Heap Memory Allocation


userTwo.email = "abhiraj@google.com"

console.log(userOne.email);
console.log(userTwo.email);