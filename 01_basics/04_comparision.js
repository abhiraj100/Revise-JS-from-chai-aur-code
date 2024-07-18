// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);

console.log("2" > 1);   // true
console.log("02" > 1);  // true

console.log("-------------");

console.log(null > 0);  // false// null is an empty value
console.log(null == 0); // false
console.log(null >= 0); // true here null is converted into 0 // null is bigger when we compare null >= 0 , in this case null is conver into 0

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("-------------");

console.log(undefined == 0);    // false
console.log(undefined >= 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false

// undefined is also gives output as false while comparing using the operators

// === strict check
// what does triple equal do?
// Not just check your values. Rather, it strictly checks the values, that is, 
// it also checks its data type

console.log("---------------------");
console.log("2" == 2);  // true  // comparing only values
console.log("2" === 2); //false  // comparing not only values but also datatypes
