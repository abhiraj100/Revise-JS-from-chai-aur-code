// Dates 
// String Interpolation  ` ` 

let myDate = new Date()
console.log(myDate);  // 2024-02-24T16:24:10.817Z
console.log(myDate.toString()); // Sat Feb 24 2024 21:54:10 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Feb 24 2024
console.log(myDate.toLocaleString());  // 24/2/2024, 9:54:10 pm

console.log(typeof myDate);  //object

console.log("-----x-----");

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2024, 1, 24, 10, 5)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2024-02-20")  // starts with 01 Jan
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("01-14-2024")
console.log(myCreateDate3.toLocaleString());
console.log(myCreateDate3.getTime());

console.log("-----x-----");

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
// console.log(myTimeStamp.());
console.log(Date.now());
console.log(Date.now()/1000);  // in seconds
console.log(Math.floor(Date.now()/1000));
console.log(Math.round(Date.now()/1000));

console.log("-----x-----");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());  // starts with 0
console.log(newDate.getFullYear());
console.log(newDate.getHours());

// String interpletetion
// `${newDate.getDay() and the time is }`

// ctrl + space => properties
// newDate.toLocaleDateString('default', {
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "IST"
})
