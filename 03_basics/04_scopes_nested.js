function one() {
    const username = "abhiraj"

    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);

    two();  // if we comment out this line then the one() is execute but two() is not execute.
}

one();


if(true) {
    const username = "yaduvanshi"
    if (username === "yaduvanshi") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    console.log(username);
}

// console.log(username);



console.log("----x----x----");

// -+-+-+-+-+-+-+-+-+-+- interesting example -+-+-+-+-+-+-+-+-+-+-+-+-+-+

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

addOne(5)

console.log("----x----x----");

// addTwo(6)  // it gives error :- cannot access 'addTwo' before initialization

console.log(addOne(8));

const addTwo = function(num) {  // it is sometimes called as a bar expression
    return num + 2
}

addTwo(6)
console.log(addTwo(3));


console.log("----x----x----");

console.log(addThree(4));

function addThree(num) {
    return num + 3
}

console.log("----x----x----");

// it will give error.... it is called as hosting in javascript 
// because here we are declaring as well as holding in the variable.

// console.log(addFour(4));

// const addFour = function(num) {
//     return num + 3
// }