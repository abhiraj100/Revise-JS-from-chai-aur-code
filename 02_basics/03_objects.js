// objects can be declared as two types literal and other is constructor

// singleton -- when you create them with any constructor, then singleton is created as an object.
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhiraj",
    "full name": "Abhiraj Yadav",
    mySym: "mykey1",   
    [mySym]: "mykey1",                                                                                                        
    age: 22,
    location: "Jaipur",
    email: "abhiraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym)

console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "abhiraj@chatgpt.com"
console.log(JsUser.email);
// Object.freeze(JsUser)

console.log("freeze--------email");
// Object.freeze(JsUser) // lock the freeze // it is affecting in printing the function greeting
JsUser.email = "abhiraj@microsoft.com"
console.log(JsUser.email);

console.log("-----x-----");

console.log(JsUser);

console.log("-----x-----");

// add function
JsUser.greeting = function() {
    console.log("Hello JS User");
}

console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greeting());  // JsUser.greeting is not a function

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());