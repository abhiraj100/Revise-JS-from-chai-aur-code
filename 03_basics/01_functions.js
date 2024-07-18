
function sayMyName(){
    console.log('A');
    console.log('B');
    console.log('H');
    console.log('I');
    console.log('R');
    console.log('A');
    console.log('J');
}

sayMyName // it is only the reference it will not print anything 
sayMyName()      // when the parentheses is used the execution is started

// console.log(sayMyName());  // output is : undefined 


// (number1, number2)   // parameter--> define
// (3, 5)  // arguments --> call
function addTwoNumbers(number1, number2) {
      console.log(number1 + number2);
}

addTwoNumbers()  // output : NaN

addTwoNumbers(5, 7);  // 12
addTwoNumbers(5, "7");  // 57
addTwoNumbers(5, "a");  //5a
addTwoNumbers(5, null);  //5

const result = addTwoNumbers(5, 3);  //8

console.log("Result:", result);  // Result: undefined


console.log("----x-----x-----");

function addTwoNum(number1, number2) {
    
    let results = number1 + number2
    console.log("yaduvanshi");
    return results
    console.log("abhiraj");  // it'll never execute .., it is the rule when the 
    // function return then further nothing is execute
    // console.log(number1 + number2);
}

const results = addTwoNum(3, 6)

console.log("Results:", results);

console.log("----x-----x-----");


function addTwoNum2(number1, number2) {

    return number1 + number2
}

const output = addTwoNum2(5, 6)
console.log("Output:" + output);

/*
function loginUserMessage(username) {
    return `${username} just logged in`
}

// loginUserMessage("abhiraj")
console.log(loginUserMessage("abhiraj"))  // abhiraj just logged in
console.log(loginUserMessage(""))  //  just logged in  (null)
console.log(loginUserMessage())  // undefined just logged in
*/

// undefined & "" is false so we don't use it directly in the conditions
// if (!undefined){}

function loginUserMessage(username) {
    // if(username === undefined){
    if(!undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// loginUserMessage("abhiraj")
console.log(loginUserMessage())  // undefined just logged in

// equivalent code

function loginUser(username) {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// loginUserMessage("abhiraj")
console.log(loginUser())  // undefined just logged in

console.log("----x-----x-----");

// if user don't pass anything then we pass default values
function loginUser1(username = "Ranveer") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// loginUserMessage("abhiraj")
console.log(loginUser1())  // by default it takes value which is given i.e "Ranveer"
console.log(loginUser1("Aditya"))  // name just logged in

