const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name() {} )

coding.forEach( function (item) {
    console.log(item);
} )

console.log("----x----x----x----");

// coding.forEach( greet = () => {} )

coding.forEach( (val) => {
    console.log(val);
} )

console.log("----x----x----x----");

coding.forEach( (item) => {
    console.log(item);
})

console.log("----x----x----x----");

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);  // pass as a parameter, give only reference

console.log("----x----x----x----");

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

// [{}, {}, {}]

console.log("----x----x----x----");

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

// find the value of item of Object which is under the array  [{a:1}, {b:2}, {c:3}]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.languageFileName);
} )




