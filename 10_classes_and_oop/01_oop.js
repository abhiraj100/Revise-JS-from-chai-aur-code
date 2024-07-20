const user = {
    username: "abhiraj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetails());

console.log(this);  // {}

// output

// abhiraj
// {
//   username: 'abhiraj',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
// undefined




// const promiseOne = new Promise()
// const date = new Date()
// new -> constructor function  -> it allows us to make multiple instance from single object literal, it helps to make new context


// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this;
// }

// const userOne = User("Abhiraj", 12, true)
// console.log(userOne);

// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);   // in this case values are override if we don't use the "new" keyword

// console.log(userTwo);


// Constructor function : it gives you a new instance every time, gives you a new copy

function UserABC(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this;
}

const userOne1 = new UserABC("Abhiraj", 12, true)
console.log(userOne1);

const userTwo2 = new UserABC("ChaiAurCode", 11, false)
console.log(userOne1);   // in this case values are override if we don't use the "new" keyword

console.log(userTwo2);

console.log("-----x-----x-----x-----")

// Note :- Whenever we use new keyword an empty new object is create

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;    //it is implicitly(automatically) defined for us.  (by default)
}

const userOne = new User("Abhiraj", 12, true)
console.log(userOne);

console.log("-----x-----x-----x-----")

console.log(userOne.constructor);  // [Function: User]

console.log("-----x-----x-----x-----")

const userTwo = new User("ChaiAurCode", 11, false)
console.log(userTwo);

console.log("-----x-----x-----x-----")
console.log(userTwo.constructor);

console.log("-----x-----x-----x-----")

// instanceof 

// instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.




function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car ('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output : true

console.log(auto instanceof Object);
// Expected output : true
