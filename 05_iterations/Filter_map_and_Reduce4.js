const myNums = [1, 2, 3]

// Reduce is used in the bill card in shopping
const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0);

console.log(myTotal);

// output 

// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// 6


console.log("----x----x----x----");

const myTotal2 = myNums.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 3)

console.log(myTotal2);

console.log("----x----x----x----");

const myTotal3 = myNums.reduce( (acc, curr) => acc + curr , 0)

console.log(myTotal3);

console.log("----x----x----x----");

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// item :-  {
    //     itemName: "data science course",
    //     price: 12999
    // }

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(priceToPay);






