// Inheritance is the prototypal behaviour of Javascript

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// const chai =  Teacher("chai", "chai@teacher.com", "12345")
// TypeError: Class constructor Teacher cannot be invoked without 'new'.

const chai = new Teacher("chai", "chai@teacher.com", "12345")

chai.addCourse();
chai.logMe();

console.log("----x----x----x----");

const masalaChai = new User("masalaChai")

// masalaChai.addCourse();   // TypeError: masalaChai.addCourse is not a function

masalaChai.logMe();

console.log("----x----x----x----");

console.log(chai === masalaChai);  // false

console.log("----x----x----x----");

console.log(chai === Teacher);  // false

console.log("----x----x----x----");

console.log(chai instanceof Teacher);  // true

console.log("----x----x----x----");

console.log(chai instanceof User);  // true

console.log("----x----x----x----");



