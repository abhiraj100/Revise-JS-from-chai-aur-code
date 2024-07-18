const user = {
    username: "abhiraj",
    price: 999,

    welcomeMessage: function() {
        // current context(values that it holds)
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

console.log("----x----x----");

user.welcomeMessage  // it shows or print nothing --> it is reference
user.welcomeMessage();

console.log("----x----x----");

user.username = "Radhe Krishna"  // we changed the context
user.welcomeMessage();

console.log("----x----x----");

console.log(this);  // {}  --> here this refers to the empty object


function chai() {
    console.log(this);
}

chai()

console.log("----x----x----");

function chaiAurCode() {
    let username = "yaduvanshi"
    // console.log(this);  // almost same values
    console.log(this.username);  // undefined
}

chaiAurCode()

// note : this context is actually works under the object, we are unable to use 
//          this inside the functions
console.log("----x----x----");