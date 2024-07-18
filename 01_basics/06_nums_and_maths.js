const score = 400
console.log(score);  // 400

 const balance = new Number(350)
 console.log(balance);  // [Number : 350]
 console.log(typeof balance);  // object

 console.log(balance.toString());  // 350
 console.log(typeof balance);  // object
 console.log(balance.toString().length);  // 3

 console.log(balance.toFixed(2)); // 350.00
 console.log(balance.toFixed(1)); // 350.0

 // Precision
 const otherNumber = 23.8969
 console.log(otherNumber.toPrecision(3));  // 23.9

 const otherNumber1 = 123.8969
 console.log(otherNumber1.toPrecision(3));  // 124
 console.log(otherNumber1.toPrecision(4));  // 123.9

 const otherNumber2 = 1123.8969
 console.log(otherNumber2.toPrecision(3));  // 1.12e+3

// to read the no. of zeros efficiently
const hundreds = 1000000
console.log(hundreds.toLocaleString());  // 1,000,000  // US Standards
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// -------x-------x--------x---------x---------x---------x--------x--------
//                     Maths

console.log(Math);  // Object [Math] {}
// In absolute value -ive value converted into +ive value but it don't change the +ive value into -ive value 

console.log(Math.abs(-4));  // 4  // absolute value
console.log(Math.abs(4));  // 4

// round() convert the decimal value into number by taking approximation 
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.6));  // 5

// ceil() convert the decimal value into number by taking ceil value
// round() convert the decimal value into number by takinf floor value
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(5.9));  // 4
console.log(Math.floor(4.1));  // 4

console.log(Math.min(4, 3, 6, 8));  //3
console.log(Math.max(4, 3, 6, 8));  //8

console.log("-----x-----")
// Math.random() always come inbetween (0 to 1)
console.log(Math.random());

console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1));

// Important
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log()