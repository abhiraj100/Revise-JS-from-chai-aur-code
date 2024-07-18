const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);

console.log("----x----x----x----");

const newNums2 = myNumbers.map( (num) => {num + 10})
console.log(newNums2);

// output

// [
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined
// ]

console.log("----x----x----x----");

const newNums3 = myNumbers.map( (num) => { return num + 10})
console.log(newNums3);

console.log("----x----x----x----");

// Chaining     =>     // const newNumbers4 = myNumbers.map().map();

const newNums4 = myNumbers
                 .map( (num) => num * 100)
                 .map( (num) => num + 1);

console.log(newNums4);

// output 

// [
//     101, 201, 301,
//     401, 501, 601,
//     701, 801, 901,
//    1001
// ]

console.log("----x----x----x----");

const newNums5 = myNumbers
                 .map( (num) => num * 100)
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 400);

console.log(newNums5);

// output

// [
//     401, 501, 601,
//     701, 801, 901,
//    1001
// ]