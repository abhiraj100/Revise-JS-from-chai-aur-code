function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500))

console.log("----x----x----")

//  ...  is a rest operator

function calculateCartPrice1(...num1){
    return num1
}

console.log(calculateCartPrice1(2))
console.log(calculateCartPrice1(200, 400, 500))
console.log(calculateCartPrice1(200, 400, 500, 1000, 1299))

console.log("----x----x----")

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(2))
console.log(calculateCartPrice2(200, 400, 500))  // [ 500 ]
console.log(calculateCartPrice2(200, 400, 500, 1000, 1299)) // [ 500, 1000, 1299 ]

console.log("----x----x----")

const user = {
    username: "rahul ranjan",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}


handleObject(user); // username is rahul ranjan and price is 199

console.log("----x----x----")

const users = {
    username: "rahul ranjan",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(users);  // username is rahul ranjan and price is undefined

// we directly passed the object
handleObject({ username: "Radhe Shyam", price: 599 })
handleObject({
    username: "Ram",
    price: 499
})


console.log("----x----x----")

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));

