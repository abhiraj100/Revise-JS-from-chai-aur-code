const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
// })

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log("----x----x----x----");

console.log(values);  // it shows undefined as output until we don't write the return;

console.log("----x----x----x----");

const values2 = coding.forEach( (item) => {
    // console.log(item);
    return item;
});

console.log(values2);









