const myArr = []
// %DebugPrint(myArr)

// Continuous(Packed), Holey(Hole)

// SMI (small integer)
// Packed element
// Double (float, string, function)


const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

console.log("----x----x----x----");

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);
console.log(arrThree[8]);
console.log(arrThree);

console.log("----x----x----x----");
// SMI > DOUBLE > PACKED
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED

// const arrFour = new Array[3]
// // just 3 holes. HOLEY_SMI_ELEMENTS

// arrFour[0] = '1'  // HOLEY_ELEMENTS
// arrFour[1] = '2'  // HOLEY_ELEMENTS
// arrFour[2] = '3'  // HOLEY_ELEMENTS
// console.log(arrFour);

console.log("----x----x----x----");

const arrFive = []
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')  // PACKED_ELEMENTS
console.log(arrFive);

console.log("----x----x----x----");

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN)  // PACKED_DOUBLE
arrSix.push(Infinity)  // PACKED_DOUBLE
console.log(arrSix);

console.log("----x----x----x----");

// for, for-of, for-in, forEach



