// step 1 :- it is a singleton Object
// const tinderUser = new Object()
// console.log(tinderUser);   // output : {}

// step 2
// const tinderUser = {}
// console.log(tinderUser);

// step 3
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Yaduvanshi"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log("----x----x----");

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhiraj",
            lastname: "yaduvanshi"
        }
    }
}

console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// Optional chaining
console.log(regularUser.fullname?.userfullname.lastname);

console.log("----x----x----");

/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2 }
console.log(obj3);

console.log("----x----x----");

// assign()
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

console.log("----x----x----");

const obj5 = Object.assign({}, obj1, obj2)  // {} is optional parameters
console.log(obj5);
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3 )   // (target, source)
console.log(obj4);

console.log("----x----x----");

// spread operator
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

// when the values are come from the database
// object of the array  :- array of object
const users = [
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 2,
        email: "rahul@gmail.com"
    },
    {
        id: 3,
        email: "yadav@gmail.com"
    }
]

console.log(users[0].email);
console.log(users[1].email);
console.log(users[2].email);

console.log("----x----x----");

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // every key becomes array inside the array

// when we traverse the whole loop and the value is not exist sometimes , then
// there is the chance to crashed

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedId'));

