// fetch('https://something.com').then().catch().finally()

// promise :- The Promise is an object represents the eventual completion (or failure) of an asynchronous 
//            operation and its resulting value.

// Promise is introduce in ES6
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log('Async task is complete');
        resolve();  // now it is connect with .then()
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

console.log("----x-----x-----x------");

new Promise(function(resolve, reject){
    setTimeout (function(){
        console.log("Async task 2 is complete");
        resolve();   // now it is connect with .then()
    }, 1000);

}).then(function () {
    console.log("Async 2 resolved");
});

console.log("----x-----x-----x------");

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout( function() {
        console.log("promise 3");
        resolve({username: "Abhiraj", email: "abhiraj10092@gmail.com"});
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
})

// console.log("----x-----x-----x------");

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout( function() {
//         let error = true;
//         if (!error) {
//             resolve({username: "abhiraj", password: "12345"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     } , 1000)
// })

// // promiseFour.then().catch()

//  promiseFour.then( (user) => {
//     console.log(user);
//     return user.username
// } ).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// })


// console.log("----x-----x-----x------");

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout( function() {
        let error = false;
        if (!error) {
            resolve({username: "abhiraj", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    } , 1000)
})

// promiseFour.then().catch()

 promiseFour.then( (user) => {
    console.log(user);
    return user.username
} ).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout( function() {
        let error = false;
        // let error = true;
        if (!error) {
            resolve({username: "javascript", password: "12345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    } , 1000)
});

// // promiseFive.then()

// async function consumePromiseFive () {
//     const response = await promiseFive
//     console.log(response);
// }

// consumePromiseFive()



// async await

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// 100% working code

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch {
//         console.log("E: error");
//         console.log("E: "error);
//     }
// }

// getAllUsers();



// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/abhiraj')
.then( (response) => {
    return response.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})
// .finally()



