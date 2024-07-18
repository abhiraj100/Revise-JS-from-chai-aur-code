// For-in Loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for (const key in myObject) {
    console.log(key);
}

console.log("----x----x----x----");

for (const key in myObject) {
    console.log(myObject[key]);
}

console.log("----x----x----x----");

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log("----x----x----x----");

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}

console.log("----x----x----x----");

for (const key in programming) {
    console.log(programming);
}

console.log("----x----x----x----");

for (const key in programming) {
    console.log(programming[key]);
}

console.log("----x----x----x----");
const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set('IN', "India")   // It will not print 

for (const key in map) {
    console.log(key);    // it will not print anything, it is not iterator able
}

console.log("----x----x----x----");
