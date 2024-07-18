const name = "Abhiraj"
const repoCount = 100

console.log(name + " " + repoCount +  " Value");  // it is commonly not used nowadays

// string interpeletion
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// One more way to use the string
const gameName = new String('Abhiraj Yadav');  // javascript used here
console.log(gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);  // we get empty object

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.charAt(1));
console.log(gameName.indexOf('Y'));
console.log(gameName.indexOf('i'));

const myName = new String("Rahul-Ranjan");
const newString = myName.substring(0,5);  // we dont use negative value here, it ignore the negative value and starts from 0
console.log(newString);

const anotherString = myName.slice(0, 4);
console.log(anotherString);

const anotherString1 = myName.slice(-12, 5);  // print in reverse value, it starts from end and then print 
console.log(anotherString1);

const newStringOne = "   abhiraj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhiraj.com/abhiraj%20yaduvanshi"
console.log(url.replace('%20', '-'));

console.log(url.includes('abhiraj'));
console.log(url.includes('yadav'));


const myName1 = "abhiraj-yadav-rahul-ranjan-yaduvanshi"
console.log(myName1.split("-"));

// split(separator)
// split(separator, limit)