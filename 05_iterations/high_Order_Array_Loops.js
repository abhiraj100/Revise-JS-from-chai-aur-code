// For-of Loop

// ["", "", ""]
// [{}, {}, {}]


// for (const iterator of object) {
    
// }

// forof
// ` ` Back ticks
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

console.log("----x----x----x----");

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

console.log("----x----x----x----");

// Maps datatype
// map.  (clear, delete, entries, forEach, get, has, keys, set, size, values)

const map = new Map();
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set('IN', "India")   // It will not print 

console.log(map);

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   }

console.log("----x----x----x----");

for (const key of map) {
    console.log(key)
}

// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

console.log("----x----x----x----");

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

// IN :- India
// USA :- United States of America
// FR :- France

console.log("----x----x----x----");

// applying ( forof ) loop for object

/*
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-' , value);
}

// TypeError : myObject is not iterable 

*/

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value);
// }

// TypeError : myObject is not iterable 




