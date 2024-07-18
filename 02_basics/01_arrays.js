// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myArr = [0, 1, 2, 3, 4, 5, "abhiraj", 'yadav']  // it is also valid

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[3]);

const myHeros = ["shaktiman", "naagraj"]
console.log(myHeros);

const myArr1 = [1, 2, 3, 4]
console.log(myArr1);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2);

// Array  methods

myArr.push(6);
console.log(myArr);
myArr.push(7);   // insert in the last of the array
console.log(myArr);
myArr.pop()   // remove the last value of the array
console.log(myArr);

myArr1.unshift(9)  // insert at the start of the array
console.log(myArr1);
myArr1.shift()
console.log(myArr1);


console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();   // convert the array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

// slice
console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3);
console.log(myn1);
console.log("B ", myArr1);

// splice

const myn2 = myArr1.splice(1, 3);
console.log("C ", myArr1);
console.log(myn2);
