// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// prototypal inheritance 

Teacher.__proto__ = User

// modern syntax

//  setPrototypeOf(o: any, proto: object | null): any 
//  Sets the prototype of a specified object o to object proto or null. 
//  Returns the object o.

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);   // current context
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength();

// Output 
// ChaiAurCode     
// undefined
// True length is: 11 

console.log("----x----x----x----");

"abhiraj".trueLength();

console.log("----x----x----x----");

"iceTea".trueLength();

console.log("----x----x----x----");
