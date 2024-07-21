// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

       // methods
//     encryptPassword() {
//         return `${this.password}abc`;
//     }


//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene  / under the hood

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;    
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

console.log("----x----x----x----");

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

console.log("----x----x----x----");






