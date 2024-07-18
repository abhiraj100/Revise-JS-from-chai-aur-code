const chai = function () {
    let username = "abhiraj"
    console.log(this.username)
}

chai()  // undefined

console.log("----x----x----")

// Arrow Function =>

const chaiAurCode = () => {
    let username = "abhiraj"
    console.log(this);
    console.log(this.username);
}

chaiAurCode()

console.log("----x----x----")

// Arrow Function  
// syntax :  () => {}


// Basic Arrow Function

// Explicit return  --> in it compulsory to write the return keyword and the parentheses {}.

const addTwo = (num1, num2) => {
    return num1 + num2
}

addTwo(3, 4)
console.log(addTwo(3, 4));

console.log("----x----x----")

// Implicit return  --> no need to write the return keyword, it is already understandable

// const addThree = (num1, num2, num3) => num1 + num2 + num3
const addThree = (num1, num2, num3) => (num1 + num2 + num3)

addThree(1, 2, 3)
console.log("value of AddThree is : " + addThree(1, 2, 3))

console.log("----x----x----")

const addFour = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
addFour(1, 2, 3, 4)
console.log("value of AddFour is : " + addFour(1, 2, 3, 4))

console.log("----x----x----")

// const objectReturn = (num1, num2) => {username: "abhiraj"} // if we don't wrap it in the paranthesis then it will not return the object.
// console.log(objectReturn(1, 2))

// const objectReturn = (num1, num2) => {username: "abhiraj"}
// we can't return the object like that

// to return the object then we have to wrap it in the parentheses
const objectReturn = (num1, num2) => ({username: "abhiraj"})
console.log(objectReturn(1, 2))  // undefined


// it is useful in the loops

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})   // it is also the correct syntax

// myArray.forEach( () => {})

// myArray.forEach( () => ())