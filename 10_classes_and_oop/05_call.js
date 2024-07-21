// call, bind, apply

function SetUsername(username) {
    // Complex calculations - DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password) {
    // SetUsername(username);  // execute and then disappear that means disappear from the call stack
    // SetUsername.call(username);  // explicitly call
    SetUsername.call(this, username);  // store the variable, functions declared then we have to give execution context

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);