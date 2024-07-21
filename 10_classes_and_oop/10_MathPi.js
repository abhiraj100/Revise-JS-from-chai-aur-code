// The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.

// The Object.getOwnPropertyDescriptors() method does not change the original object.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);


// console.log(Math.PI);   // 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI);  // Value is not changed it is still 3.141592653589793...

// factory function --> by default create's value is null
// const myNewObject = Object.create(null);

console.log("----x-----x-----x-----");

const chaiTea = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}

console.log(chaiTea);

console.log("----x-----x-----x-----");

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani")
    }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));  // undefined -> reason because chai is the object not a property that's why it gives undefined as an output. So, in .getOwnPropertyDescriptor we have to pass the Object as well as the property of the object so that it gives the descriptor.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


console.log("----x-----x-----x-----");

/*
Object.defineProperty()

The Object.defineProperty() method adds or changes an object property.

The Object.defineProperty() method lets you change property metadata.

The Object.defineProperty() method lets you add getters and setters.
*/

Object.defineProperty(chai, 'name', {
    // writable: false,
    // enumerable: false,
    enumerable: true
    
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
    //     value: 'ginger chai',
    //     writable: false,
    //     enumerable: false,
    //     configurable: true
    // }


    
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

console.log("----x-----x-----x-----");

// forof loop -> The JavaScript for of statement loops through the values of an iterable object.
// The Object.entries() method returns an array of the key/value pairs of an object.
// The Object.entries() method does not change the original object.

for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// name : ginger chai
// price : 250
// isAvailable : true




/*
        note


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani")
    }
}


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
});

for (let [key, value] of Object.entries(chai)) {

    console.log(`${key} : ${value}`);
}


If we don't apply check then the code phat jayega

    orderChai: function(){
        console.log("chai nai bani")
    }


It is only possible when enumerable is false
we don't want this -> we only want key, value pair



for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// output 

price : 250
isAvailable : true
*/






