// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

console.log("----x----x----x----");

for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
}

console.log("----x----x----x----");

// select and ctrl + d

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);
}

// console.log(element);  // it gives error : element is not defined  // element variable is declared inside the scope that's why it is not accessible from outside the scope

console.log("----x----x----x----");

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number")
    }
    console.log(element);
}


console.log("----x----x----x----");

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value : ${j} and inner loop ${i}`);

  }
    
}


console.log("----x----x----x----");

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);
  }
    
}


console.log("----x----x----x----");

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    console.log(i + ' * ' + j + ' = ' + i*j);
  }
    
}

console.log("----x----x----x----");

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log("----x----x----x----");

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log("----x----x----x----");

// ctrl + c  => to stop

console.log("----x----x----x----");

console.log("Break and Continue");
// break and continue

// break
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5 , 5 is the best number`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}


console.log("----x----x----x----");

console.log("Break and Continue");
// break and continue

// continue
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5 , 5 is the best number`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}